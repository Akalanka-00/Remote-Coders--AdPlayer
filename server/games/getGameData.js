
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
db.collection("GamesCollection").orderBy("Name").startAt(0).limit(10).get().then((querySnapshot)=> {
  querySnapshot.forEach(element => {
      console.log(element.data());
  })
});
