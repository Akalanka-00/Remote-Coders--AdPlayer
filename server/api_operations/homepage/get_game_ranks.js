const collectionList = require("../../service/Collections");

module.exports = async function getRankedGames(req, res) {
  const gameCollection = await collectionList.gameCollection
    .orderBy("rank")
    .where('rank', '>', 0)
    .limit(3)
    .get();
  const game_list = gameCollection.docs.map((doc) => ({
    name: doc.data().game_name,
    rank: doc.data().rank,
    icon: doc.data().game_icon,
  }));

  res.send(game_list);
  console.log(game_list);
};
