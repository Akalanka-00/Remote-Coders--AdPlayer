
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

const data3 = {
    amount: 20,
    currentBalance: 127,
    date: "january 9,2023 at 12:00:06 AM UTC+5:30",
    userId: 3
}

const data4 = {
    amount: 30,
    currentBalance: 147,
    date: "january 9,2023 at 12:00:08 AM UTC+5:30",
    userId: 4
}

db.collection("drawings").doc(data3.userId.toString()).set(data3);
db.collection("drawings").doc(data4.userId.toString()).set(data4);
