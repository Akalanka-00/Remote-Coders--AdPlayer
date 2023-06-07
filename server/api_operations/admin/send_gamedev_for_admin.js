const collectionList = require("../../service/Collections");

module.exports = async function update_rank(req, res) {
  const { gameId, rank } = req.body;

  if (!gameId || !rank) {
    res.status(400).send("Missing gameId or rank in the request body");
    return;
  }

  collectionList.gameCollection.doc(gameId).update({ rank })
    .then(() => {
      res.status(200).send("Rank updated successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
