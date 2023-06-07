const collectionList = require("../../service/Collections");
const { getRandomElement } = require("../operations/common");
const { user_customers, advertisements } = require("../stores/data");
const { customer_ids, ad_type_ids, all_user_ids } = require("../stores/dynamic_data");


async function saveCustomers() {
    for (const user_customer of user_customers) {
      const CustomerRef = await collectionList.customerCollection.add({
        advertisements: user_customer.advertisements,
      });
      delete user_customer.advertisements;
      user_customer.user_data_id = CustomerRef.id;
      user_customer.email = user_customer.fname+user_customer.lname+"@gmail.com";

      const UserRef = await collectionList.userCollection.add(user_customer);
      customer_ids.push(CustomerRef.id);
      all_user_ids.push(UserRef.id);

    }
    console.log("User Customers saves successfully");
  }
  
  async function saveCustomerAds() {
    for (const customer_id of customer_ids) {
      const ad_ids = [];
      for (const advertisement of advertisements) {
        advertisement.ad_type_id = getRandomElement(ad_type_ids);
        const AdvertisementRef = await collectionList.advertisementCollection.add(
          advertisement
        );
        ad_ids.push(AdvertisementRef.id);
      }
  
      const CustomerRef = await collectionList.customerCollection
        .doc(customer_id)
        .update({
          advertisements: ad_ids,
        });
    }
    console.log("Customer Ads saves successfully");
  }

  module.exports = {saveCustomers,saveCustomerAds}