var express = require("express")
var mongoClient = require("mongodb").MongoClient
var cors = require("cors")
var URL = "mongodb://127.0.0.1:27017"

var app = express()
app.use(cors())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

// ? Testing Api

app.get("/",(req,res)=>{
    res.send("Working")
})

// ! Job Poster Backend

// * Fetching all Job Posters
app.get("/AllJobPoster",(req,res)=>{
    mongoClient.connect(URL)
    .then((object)=>{
        var database = object.db("ReactPractice5-21")
        database.collection("JobPoster").find({}).toArray().then((document)=>{
            res.send(document);
            console.log("API hit")
        })
    })
})


// * Register Job Poster

app.post("/JobPosterRegister",(req,res)=>{
    var data = {
        JobPosterName : req.body.JobPosterName,
        JobPosterID : req.body.JobPosterID,
        JobPosterPassword : req.body.JobPosterPassword,
        JobPosterBranch : req.body.JobPosterBranch,
        JobPosterContactNumber : req.body.JobPosterContactNumber,
        JobPosterEmailID : req.body.JobPosterEmailID,
    }

    mongoClient.connect(URL)
    .then((object)=>{
        var database = object.db("ReactPractice5-21")
        database.collection("JobPoster").insertOne(data).then((document)=>{
            console.log("Job Poster Registered Successfully");
            res.redirect("/AllJobPoster")
            
            
        })
    }).catch((error)=>{
        console.log(error)
    })
})

// * Job Poster Login






app.listen(5002,()=>{
    console.log(`server Listening to http://127.0.0.1:5002  = JobPoster `)
})