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


// !========================>>>>>>>>>>>>>> Customer Related Data Only ⬇️ <<<<<<<<<<<<<<<<<<<===================================

// !registering customer

app.post("/registercustomer", (req, res)=>{
    var customerDetails = {
       FirstName : req.body.FirstName,
       LastName : req.body.LastName,
       EmailID : req.body.EmailID,
       Age : parseInt(req.body.Age),
       City : req.body.City,
       State : req.body.State,
       PANNumber : req.body.PANNumber,
       Address : req.body.Address,
       AadharNumber : req.body.AadharNumber,
       Mobile : req.body.Mobile,
       UserID : req.body.UserID,
       Password : req.body.Password,
       REPassword : req.body.REPassword,
       FDAccountNumber:"",
       RecAccountNumber : "",
       PPFAccountNumber : "",
    };
    mongoClient.connect(conStr)
    .then(obj=>{
        var database = obj.db("ReactPractice5-21");
        database.collection("CustomerData").insertOne(customerDetails)
        .then(()=>{
           console.log("Record Inserted");
           res.redirect("/customers");
        })
    })

    
});
// !-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//  ! <<<<<< Viewing All customer details who registered >>>>>>

app.get("/customers", (req, res)=>{
    mongoClient.connect(conStr)
    .then(obj=>{
         var database = obj.db("ReactPractice5-21");
         database.collection("CustomerData").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
         })
    })
    .catch(err=>{
        console.log(err);
    })


});

// ? Fetching particular Customer using UserID
app.get("/customer/:UserID",(req,res)=>{
    var UserID = req.params.UserID;
    mongoClient.connect(conStr)
    .then((object)=>{
        var database = object.db('ReactPractice5-21')
        database.collection('CustomerData').find({UserID : UserID}).toArray().then((document=>{
            res.send(document)
        }))
    })
})

// !---------------- Customer Data Using USERID 👆 ----------------


// ! >>>>>>> updating Customer's Account using Agent <<<<<<<<

app.put("/CustomerAgentUpdate/:UserID",(req,res)=>{
    var userid = req.params.UserID
    var Details ={
        CustomerAccountNumber : req.body.CustomerAccountNumber,
        CustomerID : req.body.CustomerID,
        Branch : req.body.Branch,
        IFSCCode : req.body.IFSCCode,
        MICRCode : req.body.MICRCode,
        AccountNature : req.body.AccountNature,
        AccountOpen : req.body.AccountOpen,
        AccountBalance : req.body.AccountBalance,
        FDAccountNumber:"",
        RecAccountNumber : "",
        PPFAccountNumber : "",
    }

    mongoClient.connect(conStr)
    .then((clientObject)=>{
        const database = clientObject.db("ReactPractice5-21")
        database.collection('CustomerData').updateOne({UserID:userid},{$set:Details})
        .then(result=>{
            console.log("Updated Data");
            res.redirect("/customer/:UserID")
        })
    })
})


// !-------------------------------Fund Transfer----------------------------------------->>>>



// !------------------------------HELp/FAQ--------------------------------------

app.get("/AllQueries",(req,res)=>{
    mongoClient.connect(conStr)
    .then(object=>{
        var database = object.db("ReactPractice5-21")
        database.collection("Queries").find({}).toArray().then((document)=>{
            res.send(document);
            res.end()
        })
    })
})

app.post("/Queries/:UserID",(req,res)=>{
    const AreaOfQuery = req.body.AreaOfQuery
    
    var userData = {
        userid : req.params.UserID,
        UserID : req.body.UserID,
        EmailID : req.body.EmailID,
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        AccountNumber : req.body.AccountNumber,
        AreaOfQuery : req.body.AreaOfQuery,
        Queries : req.body.Queries,
    }
    mongoClient.connect(conStr).then(object=>{
        var database = object.db("ReactPractice5-21")
        database.collection("Queries").insertOne(userData).then(()=>{
            console.log("Query Inserted");
            res.redirect("/AllQueries")
    })
    })
    
})





// !=======================>>>>>>>>>>>>>>>>>>>>>>> Agent Related Data only ⬇️ <<<<<<<<<<<<<<<<<<<<<<<<===========================


//? Reading and Registering Agent

app.get("/AgentData", (req, res)=>{
    mongoClient.connect(conStr)
    .then(obj=>{
         var database = obj.db("ReactPractice5-21");
         database.collection("AgentData").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
         })
    })
    .catch(err=>{
        console.log(err);
    })


});

// ? Registering Data

app.post("/AgentRegister", (req, res)=>{
    var AgentDetails = {
       FirstName : req.body.FirstName,
       LastName : req.body.LastName,
       EmailID : req.body.EmailID,
       Age : parseInt(req.body.Age),
       City : req.body.City,
       State : req.body.State,
       PANNumber : req.body.PANNumber,
       Address : req.body.Address,
       AadharNumber : req.body.AadharNumber,
       Mobile : req.body.Mobile,
       AgentID : req.body.AgentID,
       Password : req.body.Password,
       REPassword : req.body.REPassword,        
    };
    mongoClient.connect(conStr)
    .then(obj=>{
        var database = obj.db("ReactPractice5-21");
        database.collection("AgentData").insertOne(AgentDetails)
        .then(()=>{
           console.log("Record Inserted");
           res.redirect("/customers");
        })
    })
})






app.listen("5000");
console.log(`Server Started : http://127.0.0.1:5000`);