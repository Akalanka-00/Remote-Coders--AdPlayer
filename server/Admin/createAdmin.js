
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

/*creating a Admin and also updating
const data = {
  Name: "subadmin2",
  password: "unknown"
}

db.collection("sub-admin").doc(data.toString()).set(data);*/

function getAdminID(){
        l= 20;
        var text = "";
        var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i=0; i < l; i++ )
        {  
            text += char_list.charAt(Math.floor(Math.random() * char_list.length));
        }
        console.log(text);
        return text;
  };

const dataset = {
    Id:getAdminID(),
    Name:"sub-admin3",
    password: "admin",
    privil1: true,
    privil2: true,
    privil3: false
  
  }
  
  db.collection("sub-admin").doc(dataset.Id).set(dataset).then(res=>{
      console.log("Admin added successfully.")
  });
  