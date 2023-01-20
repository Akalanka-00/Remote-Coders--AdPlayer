var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
db.collection("sub-admin").doc("A-0001").delete().then(res=>{
    console.log("Admin deleted successfully.")
})