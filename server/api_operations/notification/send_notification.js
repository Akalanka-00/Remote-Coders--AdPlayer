const collectionList = require("../../service/Collections");

module.exports = async function push_notification(req, res) {
  const data = req.body;
  data.pushed_date = new Date();
  collectionList.notificationCollection
    .add(data)
    .then(() => {
      res.status(201).send("Notification submitted successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
