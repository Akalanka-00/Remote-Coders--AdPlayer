const collectionList = require("../../service/Collections");

async function getAdminData() {
  const userCollectionRef = await collectionList.adminCollection.get();
  const userList = userCollectionRef.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      fname: data.Fname,
      lname: data.Lname,
      email: data.email,
      privilage1: data.privilage1,
      privilage2: data.privilage2,
      privilage3: data.privilage3,
    };
  });
  return {
    admins:userList,
    total: userList.length
  };
}

module.exports = async function (req, res) {
  try {
    const userList = await getAdminData();
    res.send(userList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};