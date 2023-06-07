const collectionList = require("../../service/Collections");

async function getGameData() {
  const gameCollectionRef = await collectionList.gameCollection.get();
  const gameList = gameCollectionRef.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ad_cost_rate: data.ad_cost_rate,
      game_name: data.game_name,
      Resolution: data.Resolution,
      published_date: data.published_date,
      rank: data.rank,
      status: data.status,
    };
  });
  return gameList;
}

module.exports = async function (req, res) {
  try {
    const gameList = await getGameData();
    res.send(gameList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
