const collectionList = require("../../service/Collections");
const { user_admins } = require("../stores/data");
const { all_user_ids } = require("../stores/dynamic_data");


async function saveUserAdmins() {
    for (const user_admin of user_admins) {
      const AdminRef = await collectionList.adminCollection.add(
        {privileges:user_admin.privileges}
      );
      delete user_admin.privileges;
      user_admin.user_data_id = AdminRef.id;
      user_admin.email = user_admin.fname+user_admin.lname+"@gmail.com";
      const UserRef = await collectionList.userCollection.add(user_admin);
      all_user_ids.push(UserRef.id);
    }
    console.log("User Admins saves successfully");
  }

  module.exports={saveUserAdmins}