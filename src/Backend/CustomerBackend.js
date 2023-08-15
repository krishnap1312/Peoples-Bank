var express = require("express")
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");
var URL = "mongodb://127.0.0.1:27017"

var app = express()
app.use(cors())
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

// Test API

app.get("/", (req, res) => {
    res.send("Working with Nodemon")
})


// ! --------- Customer ---------- ⬇️

// * All Customers Fetching All Data ⤵️

app.get("/AllCustomers", (req, res) => {
    mongoClient.connect(URL)
        .then((object) => {
            var database = object.db("ReactPractice5-21")
            database.collection("CustomerData").find({}).toArray().then((document) => {
                res.send(document)
                res.end()
            })
        })
})

// * Customer Registeration ⤵️ 

app.post("/registercustomer", (req, res) => {
    var CustomerDetails = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        EmailID: req.body.EmailID,
        Age: parseInt(req.body.Age),
        City: req.body.City,
        State: req.body.State,
        PANNumber: req.body.PANNumber,
        Address: req.body.Address,
        AadharNumber: req.body.AadharNumber,
        Mobile: req.body.Mobile,
        UserID: req.body.UserID,
        Password: req.body.Password,
        REPassword: req.body.REPassword,
        FDAccountNumber: "",
        RecAccountNumber: "",
        PPFAccountNumber: "",
    }

    mongoClient.connect(URL)
        .then((object) => {
            var database = object.db("ReactPractice5-21")
            database.collection("CustomerData").insertOne(CustomerDetails).then(() => {
                console.log("User Registered Successfully")
                res.redirect("/AllCustomers")

            })
        }).catch(error => {
            console.log(error)
        })

})



// * Customer Login and Fetching Customer with there ID ⤵️

app.get("/Customer/:ID", (req, res) => {
    var ID = req.params.ID;

    mongoClient.connect(URL)
        .then((object) => {
            var database = object.db("ReactPractice5-21")
            database.collection("CustomerData").find({ UserID: ID }).toArray().then((document) => {
                res.send(document);
                res.end();
            })
        })
})

// * Customer Help/FAQ ⤵️
app.post("/AllQueries/:ID", (req, res) => {

    var UserQuery = {
        ID: req.params.ID,
        UserID: req.body.UserID,
        EmailID: req.body.EmailID,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        AccountNumber: req.body.AccountNumber,
        AreaOfQuery: req.body.AreaOfQuery,
        Queries: req.body.Queries,
    }

    mongoClient.connect(URL)
        .then((object) => {
            var database = object.db("ReactPractice5-21")
            database.collection("Queries").insertOne(UserQuery).then(() => {
                console.log("Query Submitted");
                res.redirect("/Queries");
            })
        })
})

// * Fetching All Queries

app.get("/Queries", (req, res) => {
    mongoClient.connect(URL)
        .then((object) => {
            var database = object.db("ReactPractice5-21")
            database.collection("Queries").find({}).toArray().then((document) => {
                res.send(document);
                res.end();
            })
        })
})


// * Contact US 

app.get("/ContactUS", (req, res) => {
    mongoClient.connect(URL)
        .then((object) => {
            var database = object.db("ReactPractice5-21")
            database.collection("ContactUS").find({}).toArray().then((document) => {
                res.send(document)
                res.end()
            })
        })
})

// * posting the contact us

app.post("/ContactUS/:ID", (req, res) => {
    var ContactDetails = {
        userID: req.params.ID,
        CustomerName: req.body.CustomerName,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        EmailID: req.body.EmailID,
        Age: req.body.Age,
        CustomerAccountNumber: req.body.CustomerAccountNumber,
        Subject: req.body.Subject,
        Message: req.body.Message,
    }

    mongoClient.connect(URL)
        .then((Object) => {
            var database = Object.db("ReactPractice5-21")
            database.collection("ContactUS").insertOne(ContactDetails).then((document) => {
                console.log("Contact Details Submitted successfully")
                res.redirect("/ContactUS")
            })

        })

})

// ! Bill and Transfer Funds -------- ⬇️

// * Transfering Fund ---------

app.post("/transferFunds/:ID", (req, res) => {
    var data = {
        ID: req.params.ID,
        ReceiverName: req.body.ReceiverName,
        ReceiverAccountNumber: req.body.ReceiverAccountNumber,
        ReceiverIFSCCOde: req.body.ReceiverIFSCCOde,
        ReceiverBankName: req.body.ReceiverBankName,
        ReceiverMICRCode: req.body.ReceiverMICRCode,
        Amount: req.body.Amount,
        TransferDescription: req.body.TransferDescription,
    }
    mongoClient.connect(URL)
        .then((object) => {
            var database = object.db("ReactPractice5-21")
            database.collection("CustomerData").findOneAndUpdate({ UserID: data.ID },
                { $inc: { AccountBalance: -data.Amount } })
                .then(() => {
                    database.collection("CustomerData").findOneAndUpdate({ UserID: data.ReceiverAccountNumber },
                        { $inc: { AccountBalance: data.Amount } }
                    ).then(() => {
                        res.json({ message: "Transfer Successfull" })
                    })
                        .catch(error => {
                            console.error("Error", error)
                        })
                })
                .catch(error => {
                    console.error("Transfer Error", error)
                })

        })
})

// * Fastag Reacharge API

app.post("/FastagRecharge/:ID", (req, res) => {
    var data = {
        ID: req.params.ID,
        CompanyName: req.body.CompanyName,
        VehicleNumber: req.body.VehicleNumber,
        Amount: req.body.Amount,
    }

    mongoClient.connect(URL)
        .then((object) => {
            var database = object.db("ReactPractice5-21")
            database.collection("CustomerData").findOneAndUpdate({ UserID: data.ID },
                { $inc: { AccountBalance: -data.Amount } })
                .then(() => {
                    res.json({ message: "Transfer Successfull" })
                })
                .catch(error => {
                    console.error("Error", error)
                })
        })
        .catch(error => {
            console.error("Transfer Error", error)
        })
})

// * Mobile Payment

app.post("/PayMobile/:ID", (req, res) => {
    var data = {
        ID: req.params.ID,
        DTHNumber: req.body.DTHNumber,
        Operator: req.body.Operator,
        RechargePlan: req.body.RechargePlan,
    }

    mongoClient.connect(URL)
        .then((object) => {
            var database = object.db("ReactPractice5-21")
            database.collection("CustomerData").findOneAndUpdate({ UserID: data.ID },
                { $inc: { AccountBalance: -data.RechargePlan } })
                .then(() => {
                    res.json({ message: "Transfer Successfull" })
                    database.collection("BillPayment").insertOne(data)
                    .then((document)=>{
                        console.log("Bill Payment done Successfully");
                    }).catch(error=>{
                        console.error(error);
                    })
                })
                .catch(error => {
                    console.error("Error", error)
                })
        })
        .catch(error => {
            console.error("Transfer Error", error)
        })
})

// * DTH Payment

app.post("/PayDTH/:ID",(req,res)=>{
    var data = {
        ID: req.params.ID,
        mobileNumber: req.body.mobileNumber,
        Operator: req.body.Operator,
        RechargePlan: req.body.RechargePlan,
    }

    mongoClient.connect(URL)
        .then((object) => {
            var database = object.db("ReactPractice5-21")
            database.collection("CustomerData").findOneAndUpdate({ UserID: data.ID },
                { $inc: { AccountBalance: -data.RechargePlan } })
                .then(() => {
                    res.json({ message: "Transfer Successfull" })
                    database.collection("BillPayment").insertOne(data)
                    .then((document)=>{
                        console.log("Bill Payment done Successfully");
                    }).catch(error=>{
                        console.error(error);
                    })
                })
                .catch(error => {
                    console.error("Error", error)
                })
        })
        .catch(error => {
            console.error("Transfer Error", error)
        })
})


// * DTH Payment
app.post("/DTHPay/:ID",(req,res)=>{
    var data = {
        ID : req.params.ID,
        Name: req.body.Name,
        PolicyNumber: req.body.PolicyNumber,
        DOB: req.body.DOB,
        Amount: req.body.Amount,
    }

    mongoClient.connect(URL)
    .then((object)=>{
        var database = object.db("ReactPractice5-21")
        database.collection("CustomerData").findOneAndUpdate(
            {UserID:data.ID},
            {$inc:{AccountBalance: -data.Amount}}
            ).then(()=>{
                database.collection("DTHPay").insertOne(data)
                .then(()=>{
                    console.log("Payment of DTH Successfully");
                }).catch((error)=>{
                    console.error(error);
                })
            }).catch((error)=>{
                console.error(error);
            })
    }).catch((error)=>{
        console.error(error);
    })
})

// * Car Insurance
app.post("/CarInsurance/:ID",(req,res)=>{
    var data = {
        ID : req.params.ID,
        VehicleNumber: req.body.VehicleNumber,
        InsuranceCompany: req.body.InsuranceCompany,
        Amount: req.body.Amount,
        OldPolicyNumber: req.body.OldPolicyNumber,
    }

    mongoClient.connect(URL)
    .then((object)=>{
        var database = object.db("ReactPractice5-21")
        database.collection("CustomerData").findOneAndUpdate(
            {UserID:data.ID},
            {$inc:{AccountBalance: -data.Amount}}
            ).then(()=>{
                database.collection("CarInsurance").insertOne(data)
                .then(()=>{
                    console.log("Payment of DTH Successfully");
                }).catch((error)=>{
                    console.error(error);
                })
            }).catch((error)=>{
                console.error(error);
            })
    }).catch((error)=>{
        console.error(error);
    })
})




app.listen(5001, () => {
    console.log("Server Started : http://127.0.0.1:5001 = Customer Backend")
})