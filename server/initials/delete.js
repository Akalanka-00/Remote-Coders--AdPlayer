const db = require("../service/initialization");

const delete_list = [
  "AdTypeCollection",
   "GameTypeCollection",

  "UserCollection",
  "DeveloperCollection",
  "AdminCollection",
  "CustomerCollection",
  "BankDataCollection",
  "AdUnitCollection",
  "CustomerAdCollection",
  "GameCollection",
  "LogCollection",
  "NotificationCollection",
  "ComplainCollection",
  "Transaction",
  "TransactionCollection",
  "AdvertisementCollection"
];

 function deleteData(){
  delete_list.forEach((coll) => {
    db.collection(coll)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          // console.log(doc.id)
          const documentRef = db.collection(coll).doc(doc.id);
          documentRef.delete();
        });
      });
  });
}

deleteData();