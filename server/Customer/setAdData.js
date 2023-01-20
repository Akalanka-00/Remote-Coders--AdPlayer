var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
//Write to Ap Upload DB 
const data={
    Adname:"ad3",
    Game:"Game#104",
    Region:"Australia",
    AdViewCount:"0",
    adtype:"pic",
    country:"Australia",
    duration:"25 days",
    resolution:"1080*1080 px",
    Advertisement:"12guojhyjrko90"
    }
    
    db.collection('AdData_Collection').doc(data.Adname.toString()).set(data);