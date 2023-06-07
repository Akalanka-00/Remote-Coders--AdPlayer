const collectionList = require("../../service/Collections");

module.exports = async function delete_game(req, res) {
  const { gameId } = req.body;

  if (!gameId) {
    res.status(400).send("Missing gameId in the request body");
    return;
  }

  collectionList.gameCollection.doc(gameId).delete()
    .then(() => {
      res.status(200).send("Game deleted successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
