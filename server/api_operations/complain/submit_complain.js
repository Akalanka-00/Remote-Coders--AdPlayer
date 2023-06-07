const collectionList = require("../../service/Collections");

module.exports = async function submit_complain(req, res) {
    const { title, description, evidence, status, sender_id, complained_date} = req.body;
   collectionList.complainCollection.add(req.body)
   .then(()=>{
    res.status(201).send("Complain submitted successfully")
   })
   .catch((err)=>{
    res.status(500).send(err)
   })
  ;
  };
  