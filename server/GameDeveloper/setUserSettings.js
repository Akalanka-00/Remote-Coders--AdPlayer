
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

const data2 = {
    adress: "up country,california",
    email: "test2@gamil.com",
    name: "michal",
    paymentMethod: "visa",
    phoneNumber: "+94111111111",
    userId: 2
}

const data3 = {
    adress: "down country,mexico",
    email: "test3@gamil.com",
    name: "trever",
    paymentMethod: "visa",
    phoneNumber: "+94222222222",
    userId: 3
}

db.collection("userSettings").doc(data2.userId.toString()).set(data2);
db.collection("userSettings").doc(data3.userId.toString()).set(data3);
