var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var conStr = "mongodb://127.0.0.1:27017";

var app = express();

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/customers", (req, res)=>{
    mongoClient.connect(conStr)
    .then(obj=>{
         var database = obj.db("tutorial");
         database.collection("customers").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
         })
    })
    .catch(err=>{
        console.log(err);
    })
});

app.post("/registercustomer", (req, res)=>{
     var customerDetails = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Age: parseInt(req.body.Age),
        Email: req.body.Email,
        Mobile: req.body.Mobile
     };
     mongoClient.connect(conStr)
     .then(obj=>{
         var database = obj.db("tutorial");
         database.collection("customers").insertOne(customerDetails)
         .then(()=>{
            console.log("Record Inserted");
            res.redirect("/customers");
         })
     })
});

app.listen("5000");
console.log(`Server Started : http://127.0.0.1:5000`);
