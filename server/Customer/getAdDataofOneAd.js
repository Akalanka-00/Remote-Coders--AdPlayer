var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
//Retrieve saved Game Details of a Particular Documet

db.collection('AdData_Collection').doc('ad2').get().then(doc => {
    console.log(doc.data());
})