const collectionList = require("../../service/Collections");

async function getLogData() {
  const logCollectionRef = await collectionList.logCollection.get();
  const logList = logCollectionRef.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
    };
  });
  return logList

}

module.exports = async function (req, res) {
  try {
    const logData = await getLogData();
    res.send(logData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
