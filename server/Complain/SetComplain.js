
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

function setX(value){
    x = value;
}

function getGameID(){
  global.x =0;
  db.collection("ComplainCollection").get().then((querySnapshot)=> {
    querySnapshot.forEach(element => {
        setX(querySnapshot.size);
        console.log(x);
        //console.log(element.data().Name);
    })
  });
  console.log("X is "+x);
  if(x>999){
    return "G-0"+x;
  }else if(x>99){
    return "G-0"+x;
  }else if(x>9){
    return "G-00"+x;
  }else if(x>0){
    return "G-000"+x;
  }else{
    return "G-0001";
  }
  
};

const dataset = {
  Id:getGameID(),
  Name:"test game",
  Owner_ID:"GDEV-0003",
  Published_Date:"",
  Rank:2,
  Platform:"Android",
  Language:"En-Us",
  Status:"Approved",
  View_count:0

}

db.collection("GamesCollection").doc(dataset.Id).set(dataset).then(res=>{
    console.log("Game details added successfully.")
});

