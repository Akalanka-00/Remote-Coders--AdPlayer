var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

//creating a Admin and also updating
const data = {
    Id:"wGaxnr6WKxOdzB1R7cKB",
    Name:"sub-admin3",
    password: "UpdateVersion2admin",
    privil1: true,
    privil2: true,
    privil3: false
}

db.collection("sub-admin").doc("wGaxnr6WKxOdzB1R7cKB").set(data).then(res=>{
    console.log("Admin Updatedted Successfully.")
})