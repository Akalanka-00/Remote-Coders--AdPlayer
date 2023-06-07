const collectionList = require("../../service/Collections");

async function getAdvertisements(cus_id) {
  const customerRef = await collectionList.customerCollection.doc(cus_id).get();
  return customerRef.data().advertisements;
}

async function getCustomerIncome(adList) {
  let tot = 0;
  for (const ad_id of adList) {
    const AdCollectionRef = await collectionList.advertisementCollection
      .doc(ad_id)
      .get();
    const data = AdCollectionRef.data();
    tot = tot + data.price;
  }

  return tot;
}

module.exports = async function get_customer_income(req, res) {
  try {
    const userCollection = await collectionList.userCollection.get();
    const customer_list = await Promise.all(
      userCollection.docs
        .filter((doc) => doc.data().user_type === "customer")
        .map(async (doc, index) => {
          const data = doc.data();
          const adList = await getAdvertisements(data.user_data_id);
          const income = await getCustomerIncome(adList);
          return {
            id: doc.id,
            username: data.username,
            profile: data.profile,
            email: data.email,
            no_of_ads: adList.length,
            income,
          };
        })
    );
    customer_list.sort((a, b) => b.income - a.income);
    res.send(customer_list);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
