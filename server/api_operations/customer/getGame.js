const collectionList = require("../../service/Collections");

async function getCustomerGameData() {
  const gamesCollectionRef = await collectionList.gameCollection.get();
  const gamesList = gamesCollectionRef.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      game_name: data.game_name,
      rank: data.rank,
      platform: data.platform,
      ad_cost_rate: data.ad_cost_rate,
    };
  });
  return gamesList;
}

module.exports = async function (req, res) {
  try {
    const gamesList = await getCustomerGameData();
    res.send(gamesList);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
