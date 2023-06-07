const collectionList = require("../../service/Collections");

async function getGameData() {
  const gameCollectionRef = await collectionList.gameCollection.get();
  const gameList = gameCollectionRef.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ad_cost_rate: data.ad_cost_rate,
      game_name: data.game_name,
      ad_units: data.ad_units,
      Resolution: data.Resolution,
      published_date: data.published_date,
      rank: data.rank,
      status: data.status,
    };
  });
  return {
    games: gameList,
    total: gameList.length,
  };
}

module.exports = async function (req, res) {
  try {
    const gameData = await getGameData();
    res.send(gameData);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
