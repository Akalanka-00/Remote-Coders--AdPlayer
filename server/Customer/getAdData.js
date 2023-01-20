var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
//Retrieve All Saved Advertisement Detail Files(documents)
const db = admin.firestore();
let uploadAdRef=db.collection('AdData_Collection');

uploadAdRef.get().then((querySnapshot) =>{
    querySnapshot.forEach(document => {
        console.log(document.data());
    })
})