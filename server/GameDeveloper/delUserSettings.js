
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

//delete a documnet
db.collection("userSettings").doc("3").delete().then(res => {
    console.log("document delete succesffuly");
})