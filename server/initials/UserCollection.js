const collectionList = require("../service/Collections");
const temp_profile =
  "https://firebasestorage.googleapis.com/v0/b/remotecoders-2140a.appspot.com/o/profile_picture.png?alt=media&token=44fc6e54-e257-4c4d-8087-f541e3f9e411";

const admin_privileges = {
  privil1: true,
  privil2: false,
  privil3: true,
};

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
    current_balance: 5000,
    withdrowal_amount: 250,
    remain_balance: 4750,
    status: "approved",
    requested_date: new Date(),
    action_taken_date: new Date(),
  },
];

const user_data = [
  {
    username: "test-developer",
    password: "dev@123",
    fname: "test",
    lname: "developer",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    transactions:[],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: "10125101651",
    acc_no: "12345687",
    acc_type: "Saving",
  },

  {
    username: "test-developer-II",
    password: "dev@1234",
    fname: "test",
    lname: "developerII",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    transactions:[],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: "10125101651",
    acc_no: "12345687",
    acc_type: "Current",
  },

  {
    username: "test-developer",
    password: "dev@123",
    fname: "test",
    lname: "developer",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    transactions:[],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: "10125101651",
    acc_no: "12345687",
    acc_type: "Saving",
  },

  {
    username: "test-developer-II",
    password: "dev@1234",
    fname: "test",
    lname: "developerII",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    transactions:[],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: "10125101651",
    acc_no: "12345687",
    acc_type: "Current",
  },

  {
    username: "test-developer",
    password: "dev@123",
    fname: "test",
    lname: "developer",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: "10125101651",
    acc_no: "12345687",
    acc_type: "Saving",
  },

  {
    username: "test-developer-II",
    password: "dev@1234",
    fname: "test",
    lname: "developerII",
    profile: temp_profile,
    user_type: "developer",
    games: [],
    name_on_bank_acc: "Test Bank User",
    bank_name: "Test Bank",
    routing_no: "10125101651",
    acc_no: "12345687",
    acc_type: "Current",
  },

  {
    username: "test-customer",
    password: "cus@123",
    fname: "test",
    lname: "customer",
    profile: temp_profile,
    user_type: "customer",
    advertisements: [],
  },

  {
    username: "test-customer-II",
    password: "cus@1234",
    fname: "test",
    lname: "customerII",
    profile: temp_profile,
    user_type: "customer",
    advertisements: [],
  },

  {
    username: "test-admin",
    password: "admin@123",
    fname: "test",
    lname: "admin",
    profile: temp_profile,
    user_type: "admin",
    privileges: admin_privileges,
  },

  {
    username: "test-subadmin",
    password: "subadmin@123",
    fname: "test",
    lname: "sub-admin",
    profile: temp_profile,
    user_type: "admin",
    privileges: admin_privileges,
  },
];

module.exports =async function saveUserInfo() {
  //console.log(user_data)
  user_data.forEach(async (user) => {
    const commonData = {
      username: user.username,
      password: user.password,
      fname: user.fname,
      lname: user.lname,
      profile: user.profile,
      user_type: user.user_type,
      registered_date: new Date(),
    };
    collectionList.userCollection.add(commonData).then((doc) => {
      if (user.user_type === "admin") {
        // console.log(user.username + "is admin")
        saveAdminData(user, doc);
      } else if (user.user_type === "customer") {
        // console.log(user.username + "is customer")
        saveCustomerData(user, doc);
      } else if (user.user_type === "developer") {
        // console.log(user.username + "is developer")
        saveDeveloperData(user, doc);
      }
    });
  });
};

function saveAdminData(user, doc) {
  //console.log(doc.id);
  const docRef = collectionList.userCollection.doc(doc.id);
  const admin_data = {
    privileges: user.privileges,
  };
  collectionList.adminCollection.add(admin_data).then((admin_doc) => {
    docRef.update({
      admin_data_id: admin_doc.id,
    });
  });
}

/**
 * 
 * {
    username: "test-customer-II",
    password: "cus@1234",
    fname: "test",
    lname: "customerII",
    profile: temp_profile,
    user_type: "customer",
    advertisements: [],
  }, 
 */
function saveCustomerData(user, doc) {
    //console.log(doc.id);
    const docRef = collectionList.userCollection.doc(doc.id);
    const cus_data = {
        advertisements: user.advertisements,
    };
    collectionList.customerCollection.add(cus_data).then((cus_doc) => {
      docRef.update({
        customer_data_id: cus_doc.id,
      });
    });
  }

function saveDeveloperData(user, doc) {
  //console.log(doc.id);
  const docRef = collectionList.userCollection.doc(doc.id);
  const dev_bank_data = {
    name_on_bank_acc: user.name_on_bank_acc,
    routing_no: user.routing_no,
    acc_no: user.acc_no,
    acc_type: user.acc_type,
  };
  collectionList.bankDataCollection.add(dev_bank_data).then((bank_doc) => {
    const dev_data = {
      games: user.games,
      dev_bank_data_id: bank_doc.id,
    };
    collectionList.transactionCollection.add(transaction_data[0]).then((tran1_doc)=>{

      collectionList.transactionCollection.add(transaction_data[1]).then((tran2_doc)=>{
        dev_data.transaction = [tran1_doc.id, tran2_doc.id]
      });
    });
    collectionList.developerCollection.add(dev_data).then((dev_doc) => {
      docRef.update({
        dev_data_id: dev_doc.id,
      });
    });

    
  });
}
