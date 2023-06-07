const collectionList = require("../../service/Collections");

module.exports = async function get_complain(req, res) {
  const { reviewed } = req.body;
 // console.log(reviewed)
  const complainCollection = await collectionList.complainCollection
    .orderBy("complained_date")
    .where("status", "==", reviewed)
    .get();
  const complain_list = complainCollection.docs.map((doc) => ({
    id:doc.id,
    ...doc.data(),
  }));

  const dataset_list = [];

  for (const element of complain_list) {
    const userData = await get_userData(element.sender_id);
    //console.log(element.sender_id);
    const dataset = {
      complain_id:element.id,
      username: userData.username,
      profile: userData.profile,
      user_type: userData.user_type,
      title:element.title,
      description:element.description,
      status:element.status,
      evidence:element.evidence,
      complained_date:element.complained_date

    };
    console.log(dataset);
    dataset_list.push(dataset);
  }

 // console.log(await dataset_list);
  res.status(200).send(dataset_list);
};

async function get_userData(user_id) {
  const UserCollection = await collectionList.userCollection.doc(user_id).get();
  return UserCollection.data();
}
