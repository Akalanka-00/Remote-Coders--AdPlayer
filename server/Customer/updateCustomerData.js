var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
//For real time updates of entered Customer profile details
const CPdata={
    
    Country:"USA",
    CustomerId:"#132245",
    Emailaddress:"123@gmail.com",
    FirstName:"Timothée",
    LastName:"Chalamet",
    ContactNumber:1234578
}
db.collection('customerCreateAccount').doc(CPdata.FirstName.toString()).set(CPdata);