const { saveUserAdmins } = require("./users/admin");
const { saveCustomerAds, saveCustomers } = require("./users/customer");
const { saveDevelopers, saveGames, saveAdUnits, saveTransactions } = require("./users/developer");
const { SaveAdTypes, SaveGameTypes } = require("./initials");
const { deleteDataCollections } = require("./operations/delation");
const { saveComplain, saveNotification, saveLogData } = require("./users/commonUser");

async function executeInitialCollections() {
  await SaveAdTypes();
  await SaveGameTypes();
}

async function executeUserDefineCollections() {
  await saveUserAdmins();
  await saveCustomers();
  await saveDevelopers();

  await saveCustomerAds();

  await saveGames();
  await saveAdUnits();
  await saveTransactions();

  await saveComplain();
  await saveNotification();
  await saveLogData();
}


async function executeFunctions() {
 try {
   await deleteDataCollections();
   await executeInitialCollections();
   await executeUserDefineCollections();
 } catch (error) {
  console.log(error)
 }
}


executeFunctions();
