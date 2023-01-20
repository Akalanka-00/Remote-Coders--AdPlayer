var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
//Getting View Count Per Ad


/*  db.collection('View Count for Ads').doc('SBO7zp2UVVwbjMb6JDn3').get().then(doc => {
      console.log(doc.data());
  })*/

  db.collection('AdData_Collection').doc('ad2').get().then(doc => {
      console.log(doc.data());
  })