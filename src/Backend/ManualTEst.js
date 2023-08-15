const express = require("express")
const mongoClient = require("mongodb").MongoClient;
const cors = require("cors")
const app = express()
const conStr = "mongodb://127.0.0.1:27017"


app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());



app.use(cors())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

app.get("/get",(req,res)=>{
    mongoClient.connect(conStr)
    .then((object)=>{
        var database = object.db("TEST")
        database.collection("test").find({}).toArray().then(documents=>{
            res.send(documents)
            res.end()
        })
    })
})

app.post("/postdat",(req,res)=>{
    const data={
        name: req.body.name,
        Acc:req.body.Acc,
        age:req.body.age,
        money:parseFloat(req.body.money)
    }
    mongoClient.connect(conStr)
    .then((values)=>{
        const database = values.db("TEST")
        database.collection("test").insertOne(data)
        .then(()=>{
            console.log("Record instered")
        })
    })

})

app.put(`/update/:Acc`, (req, res) => {
  var Acofsend = req.params.Acc;
  var amount = req.body.amount;
  
  mongoClient.connect(conStr)
    .then((object) => {
      var senderdata = object.db("TEST");
      senderdata.collection("test").findOneAndUpdate(
        { Acc: Acofsend },
        { $inc: { amount: -amount } }, // Deduct the specified amount from the existing amount
        { returnOriginal: false } // Return the updated document
      )
      .then((updatedDocument) => {
        res.send(updatedDocument);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/registercustomer", (req, res)=>{
  var customerDetails = {
    AccountNumber: req.body.AccountNumber,
    AccountBalance : parseFloat(req.body.AccountBalance)
  };
  mongoClient.connect(conStr)
  .then(obj=>{
      var database = obj.db("TEST");
      database.collection("test").insertOne(customerDetails)
      .then(()=>{
         console.log("Record Inserted");
         res.redirect("/get");
      })
  })})


  app.post('/transfer', (req, res) => {
    const data = { 
      fromAccountNumber :  req.body.fromAccountNumber,
      toAccountNumber :  req.body.toAccountNumber,
      amount :  req.body.amount,
     };
  
    // Perform the transfer operation in the MongoDB collection
    mongoClient.connect(conStr)
    .then((object)=>{
      var database = object.db("TEST")
      database.collection("test").findOneAndUpdate(
        { AccountNumber: data.fromAccountNumber },
        { $inc: { AccountBalance: -data.amount } }
      )
        .then(() => {
          database.collection("test").findOneAndUpdate(
            { AccountNumber: data.toAccountNumber },
            { $inc: { AccountBalance: data.amount } }
          )
            .then(() => {
              res.json({ message: 'Transfer successful' });
            })
            .catch(error => {
              console.error('Error transferring amount:', error);
              res.status(500).json({ error: 'Internal Server Error' });
            });
        })
        .catch(error => {
          console.error('Error transferring amount:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        })})})
  



  app.get("/customer", (req, res) => {
    const ids = req.body.ids;
    const amount = parseFloat(req.body.amount); // Parse the amount as a float
  
    mongoClient.connect(conStr)
      .then((client) => {
        const database = client.db('TEST');
        const collection = database.collection('test');
  
        // Fetch the existing account data
        collection.findOne({ ids: ids })
          .then((customer) => {
            if (!customer) {
              return res.status(404).json({ error: "Customer not found" });
            }
  
            const currentBalance = parseFloat(customer.AccountBalance);
  
            // Subtract the amount from the current balance
            const newAccountBalance = currentBalance - amount;
  
            // Update the account balance in the database
            collection.updateOne({ ids: ids }, { $set: { AccountBalance: newAccountBalance } })
              .then(() => {
                // Use the newAccountBalance variable or perform further actions
                res.send("ok");
              })
              .catch((error) => {
                console.error("Error updating account balance:", error);
                return res.status(500).json({ error: "Internal server error" });
              });
          })
          .catch((error) => {
            console.error("Error retrieving customer data:", error);
            return res.status(500).json({ error: "Internal server error" });
          })
          .finally(() => {
            client.close(); // Close the MongoDB client connection
          });
      })
      .catch((error) => {
        console.error("Error connecting to the database:", error);
        return res.status(500).json({ error: "Internal server error" });
      });
  });
  




// app.put("/CustomerAgentUpdate",(req,res)=>{
//   var id = req.body.id
//   var amoount = req.body.amoount 
//   var Details ={
//       AccountBalance : parseFloat(req.body.AccountBalance) - parseFloat(amoount),
//   }

//   mongoClient.connect(conStr)
//   .then((clientObject)=>{
//       const database = clientObject.db("TEST")
//       database.collection('test').updateOne({id:id},{$set:Details})
//       .then(result=>{
//           console.log("Updated Data");
          
//           database.collection("test").find({}).toArray().then(reso=>{
//               res.send(reso)
//           })
//       })
//   })
// })
  
  
// app.put("/CustomerAgentUpdate", (req, res) => {
//   var id = req.body.id;
//   var amount = parseFloat(req.body.amount);
  
//   var Details = {
//     AccountBalance: parseFloat(req.body.AccountBalance) - amount,
//   };

//   mongoClient.connect(conStr, (err, client) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Internal server error" });
//     }

//     const database = client.db("TEST");
//     const collection = database.collection("test");

//     collection.updateOne({ id: id }, { $set: Details }, (err, result) => {
//       if (err) {
//         console.error(err);
//         client.close();
//         return res.status(500).json({ error: "Internal server error" });
//       }

//       console.log("Updated Data");
//       client.close();
//       res.redirect("/get");
//     });
//   });
// });




app.listen("5003",()=>{
    console.log("Connected")
})
