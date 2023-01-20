
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
db.collection("ComplainCollection").orderBy("Complained_Date").startAt(0).limit(10).get().then((querySnapshot)=> {
  querySnapshot.forEach(element => {

    const st = element.data.Status;
    
    if(st === "Reviewed"){
      console.log("---------------------------------\n");
    console.log(element.data().Title);
      console.log(element.data().Description);
      console.log(element.data().Status);
    }
      
  })
});
