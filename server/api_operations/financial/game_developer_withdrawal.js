const collectionList = require("../../service/Collections");

async function get_transaction_ids(user_data_id) {
  const devCollection = await collectionList.developerCollection
    .doc(user_data_id)
    .get();
  // console.log(devCollection.data().transactions)
  return devCollection.data().transactions;
}

async function get_transaction_data(user_data_id) {
  const transaction_list = await get_transaction_ids(user_data_id);
  const transaction_data = { pending_withdrawal: 0, approved_withdrawal: 0 };
  for (const transaction of transaction_list) {
    const transactionRef = await collectionList.transactionCollection
      .doc(transaction)
      .get();
    const data = transactionRef.data();
    const status = data.status;
    const amount = data.withdrowal_amount;
    if (status == "approved") transaction_data.approved_withdrawal += amount;

    if (status == "pending") transaction_data.pending_withdrawal += amount;
  }
  return transaction_data;
}

module.exports = async function game_developer_withdrawal(req, res) {
  try {
    const userCollection = await collectionList.userCollection.get();
    const user_revenue_list = await Promise.all(
      userCollection.docs
        .filter((doc) => doc.data().user_type === "developer")
        .map(async (doc, index) => {
          const data = doc.data();
          const { pending_withdrawal, approved_withdrawal } =
            await get_transaction_data(data.user_data_id);

          return {
            id: doc.id,
            username: data.username,
            profile: data.profile,
            email: data.email,
            pending_withdrawal,
            approved_withdrawal,
          };
        })
    );
    res.send(user_revenue_list);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
