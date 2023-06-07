const collectionList = require("../service/Collections");

const transaction_list = [
  "3d4DEfsFrqAWBhp79qNy",
  "CrCEhGZwN8BOPY046hTn",
  "DE58z3uXIJpvaTB2Y7UO",
  "Ed7TXEzgIq5CY25lNuPd",
  "FqCItEYwiV8BT2TSzNAI",
  "GW2J5QtxAIVI6uUr5rsg",
  "K0YPShx1CxrlGt9IHziX",
  "KP5wemLCpIRn4hSyAUjR",
  "LwrQoNdfWF0tjyy7SUfP",
  "MDzxKQiV9IUpATgYVwvc",
  "Nl3qWQYRYJD2gXvnvRrf",
  "Pfid5C8T30MlM145tw9z",
  "RkwcPuWS7aqNNAHlDToo",
  "Rsy8mW9iH88wf7UUv6hW",
  "RtU5rAkQBPsarNgz7fCJ",
  "TgB6VfKrjdvev97SUIsu",
  "bxVTnTTGEka3zAgc8hjh",
  "cSa7Cgzo69Z6tIGyNq1U",
  "dxR0uc1Ed94HZ08XMmlV",
  "leujenOYL2i9snPGJgiv",
  "pIF3PneKnfvaSvOfEj34",
  "rrPJQuJ21j4PfhayUFBw",
  "rsgqcqICsjCMWzCpbl2U",
  "tSZpUDF4YdVeHsboErfh",
];

const used_ids=[]

function get_transactions() {
  const randomIndex = Math.floor(Math.random() * transaction_list.length/4);
  const arr = [];
  for (let i = 0; i < randomIndex; i++) {
    const element = transaction_list[Math.floor(Math.random() * transaction_list.length)];
    if(!used_ids.includes(element))
    arr.push(
      element
    );

    used_ids.push(element);
  }

  return(arr)
}
async function add_transaction_data() {
  const devs = await collectionList.developerCollection.get();
  devs.docs.map(async (doc) => {
    console.log(get_transactions());
    const devRef = await collectionList.developerCollection.doc(doc.id).update({
      transactions: get_transactions(),
    });
  });
}

async function get_transaction_list() {
  const transactions = await collectionList.transactionCollection.get();
  const list = transactions.docs.map((doc) => ({
    id: doc.id,
  }));
  console.log(list);
}

add_transaction_data();
//get_transactions();
