var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
db.collection("GamesCollection").doc("G-0004").delete().then(res=>{
    console.log("Game deleted successfully.")
})