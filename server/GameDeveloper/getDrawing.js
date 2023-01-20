
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

//get a documnet
db.collection("drawings").doc("3").get().then(doc => {
    console.log(doc.data());
})

//get whole collection
db.collection("drawings").get().then(snapshot => {
    snapshot.forEach(element => {
        console.log(element.data());
    })
})