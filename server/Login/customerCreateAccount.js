var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const data = {
    FirstName: "Sanduni",
    LastName: "Devindya",
    EmailAddress: "sanduni@gmail.com",
    Password: "123@",
    ConfirmPassword: "123@",
    ContactNumber: 0711234567,
    Country: "Sri Lanka"
}

db.collection("createAccount").doc(data.firstName.toString()).set(data);

