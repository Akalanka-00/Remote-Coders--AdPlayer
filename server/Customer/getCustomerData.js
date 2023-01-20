var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
//Retrieving the Customer profile data

let uploadCPRef=db.collection('customerCreateAccount');

uploadCPRef.get().then((querySnapshot) =>{
    querySnapshot.forEach(document => {
        console.log(document.data());
    })
})