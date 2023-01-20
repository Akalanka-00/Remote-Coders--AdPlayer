
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

//get a documnet
db.collection("userSettings").doc("3").get().then(doc => {
    console.log(doc.data());
})

//get whole collection
db.collection("userSettings").get().then(snapshot => {
    snapshot.forEach(element => {
        console.log(element.data());
    })
})