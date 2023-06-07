const AdTypeCollection = require("./AdTypeCollection");
const saveUserInfo = require("./UserCollection");
const AdUnitCollection = require("./AdUnitCollection");
const GameTypeCollection = require("./GameTypeCollection");
const GamesCollection = require("./GamesCollection");
const SaveLogData = require("./LogData");
const NotificationData = require("./NotificationData");
const ComplainCollection = require("./ComplainCollection");
const SaveTransaction = require("./Transaction");
const _delete = require("./delete");
/**
 * initials
 */
async function executeInitialCollections() {
  AdTypeCollection();
  GameTypeCollection();
}

/**
 * User Inputs
 */

async function saveUsers() {
  let err = true;
    await saveUserInfo();
     
  
}

async function SaveGames() {
    let err = true;

    await  GamesCollection()
       
    
  }

  async function SaveAdUnits() {

    await  AdUnitCollection()
        
    
  }

  async function SaveLogInfo() {

    await  SaveLogData()
        
    
  }

  async function SaveNotification() {

    await NotificationData()
       
    
  }

  async function SaveComplain() {

    await  ComplainCollection()
       
    
  }

  async function SaveTransactionData() {

    await  SaveTransaction()
       
    
  }

async function executeUserDefineCollections() {
//   saveUserInfo().then(async () => {
//     //Save Games
//     await GamesCollection()
//       .then((res) => {
//         console.log("Games added successfully");
//       })
//       .catch(async (err) => {
//         await GamesCollection().then((res) => {
//           console.log("Games added successfully");
//         });
//       });

//     //Save Ad units
//     await AdUnitCollection()
//       .then((res) => {
//         console.log("Ad units added successfully");
//       })
//       .catch(async (err) => {
//         await AdUnitCollection().then((res) => {
//           console.log("Games added successfully");
//         });
//       });

//     //Save Log information
//     await SaveLogData()
//       .then(async (res) => {
//         console.log("Log data added successfully");
//       })
//       .catch(async (err) => {
//         await SaveLogData().then((res) => {
//           console.log("Games added successfully");
//         });
//       });

//     //Save notification data
//     await NotificationData()
//       .then((res) => {
//         console.log("Notification Data added successfully");
//       })
//       .catch((err) => {
//         NotificationData().then((res) => {
//           console.log("Notification Data successfully");
//         });
//       });

//     //Save Complain data
//     await ComplainCollection()
//       .then((res) => {
//         console.log("Complain data added successfully");
//       })
//       .catch((err) => {
//         ComplainCollection().then((res) => {
//           console.log("Complain added successfully");
//         });
//       });

//     //Save Transaction data
//     await SaveTransaction()
//       .then((res) => {
//         console.log("Transaction data added successfully");
//       })
//       .catch((err) => {
//         SaveTransaction().then((res) => {
//           console.log("Transaction added successfully");
//         });
//       });
//   });

 //await saveUsers();
  await SaveGames();
//  await SaveAdUnits();
//  await SaveLogInfo();
//  await SaveNotification();
//  await SaveComplain();
 //await SaveTransactionData();
}

//executeInitialCollections();
executeUserDefineCollections()
  .then((res) => {
    console.log("executed succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
