const { userCollection } = require("../../service/Collections");

async function getAdminData() {
  const userCollectionRef = await userCollection
    .where("user_type", "in", ["admin", "sub-admin"])
    .get();

  const userList = userCollectionRef.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      fname: data.fname,
      lname: data.lname,
      username: data.username,
      user_type: data.user_type,
    };
  });
  return userList;
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
