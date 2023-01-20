var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
//For updates of entered details

db.collection('AdData_Collection').doc("ad2").onSnapshot(docSnapshot =>
    {
        console.log(docSnapshot.data());
    })