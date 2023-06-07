const collectionList = require("../service/Collections");

const transaction_data = [
  {
    current_balance: 1000,
    withdrowal_amount: 250,
    remain_balance: 750,
    status: "pending",
    requested_date: new Date(),
    action_taken_date: new Date(),
  },

  {
    current_balance: 1000,
    withdrowal_amount: 250,
    remain_balance: 750,
    status: "pending",
    requested_date: new Date(),
    action_taken_date: new Date(),
  },

  {
    current_balance: 1000,
    withdrowal_amount: 250,
    remain_balance: 750,
    status: "pending",
    requested_date: new Date(),
    action_taken_date: new Date(),
  },
];

async function getDevelopers() {
    const gameDeveloperCollection =
      await collectionList.developerCollection.get();
    const gameDevList = gameDeveloperCollection.docs.map((doc) => ({
      id: doc.id,
    }));
    console.log(gameDevList)
    return getRandomElement(gameDevList);
  }
  
  function getRandomElement(arr) {
    const randomElement = arr[Math.floor(Math.random() * (arr.length-1))];
    //console.log(randomElement);
    return randomElement;
  }

module.exports = async function SaveTransaction() {
  transaction_data.forEach((data) => {
    collectionList.transactionCollection.add(data).then(async (tran_doc)=>{
        const developer =await getDevelopers();
        console.log(developer)
        collectionList.developerCollection.doc(developer.id).get((dev_doc)=>{
            const prev_transactions = dev_doc.data().transactions;
            prev_transactions.push(tran_doc.data());
            collectionList.developerCollection.doc(developer.id).update({
                transactions:prev_transactions
            })
        })
    })
  });
};
