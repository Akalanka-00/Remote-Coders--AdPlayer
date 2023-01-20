var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

/*Should be modify*/ 
//get all data
db.collection("sub-admin").get().then(snapshot => {
  snapshot.forEach(element => {
     console.log(element.data());
  });
})