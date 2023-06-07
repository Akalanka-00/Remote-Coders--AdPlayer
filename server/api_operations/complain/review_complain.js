const collectionList = require("../../service/Collections");

module.exports = async function review_complain(req, res) {
    const {complain_id} = req.body;
  try {
    updatedComplainCollectionRef = await collectionList.complainCollection.doc(complain_id).update({
        status:true,
       })
       res.status(200).send("Complain has been reviewed")
  } catch (error) {
    res.status(500).send(error);
  }
  };
  