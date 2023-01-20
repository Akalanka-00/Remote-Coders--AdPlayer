var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

let userSettingsRef = db.collection("userSettings");

userSettingsRef.get().then((querySnapshot) => {
    querySnapshot.forEach(document => {
        console.log(document.data());
    })
})
