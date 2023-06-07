const collectionList = require("../service/Collections");

const adUnit_id_list = [];
let game_type_list = [""];

const gameList = [
  {
    game_name: "Test Game",
    game_icon: "",
    published_date: new Date(),
    platform: "Android",
    rank: 0,
    Status: "pending",
    ad_cost_rate: 2.1,
    //game_type: "type",
    ad_units: adUnit_id_list,
  },
  {
    game_name: "Test Game",
    game_icon: "",
    published_date: new Date(),
    platform: "Android",
    rank: 0,
    Status: "rejected",
    ad_cost_rate: 2.5,
    //game_type: "type",
    ad_units: adUnit_id_list,
  },
  {
    game_name: "Test Game",
    game_icon: "",
    published_date: new Date(),
    platform: "IOS",
    rank: 0,
    Status: "approved",
    ad_cost_rate: 2.1,
    // game_type: "type",
    ad_units: adUnit_id_list,
  },
];

async function getGameTypes() {
  const gameTypeCollection = await collectionList.gameTypeCollection.get();
  const gameTypeList = gameTypeCollection.docs.map((doc) => ({ id: doc.id }));
  return getRandomElement(gameTypeList);
}

async function getDevelopers() {
  const gameDeveloperCollection =
    await collectionList.developerCollection.get();
  const gameDevList = gameDeveloperCollection.docs.map((doc) => ({
    id: doc.id,
  }));
  return getRandomElement(gameDevList);
}

function getRandomElement(arr) {
  const randomElement = arr[Math.floor(Math.random() * (arr.length-1))];
  //console.log(randomElement);
  return randomElement;
}

module.exports = async function GameCollection() {
  //console.log(await getGameTypes());
  gameList.forEach(async (element) => {
    const gametype = await getGameTypes();
    const saving_data = {
      game_type: gametype.id,
      ...element,
    };
    //console.log(saving_data);
    collectionList.gameCollection.add(saving_data).then(async (doc) => {
      //console.log(doc.id)
       getDevelopers().then((dev)=>{

         collectionList.developerCollection
        .doc(dev.id)
        .get()
        .then((dev_doc) => {
          const games = dev_doc.data().games;
          games.push(doc.id);
          //console.log(dev.id)
           collectionList.developerCollection.doc(dev.id).update({
            games: games,
          }).then((res)=>{})
        });
      })
      
    });
  });

  //console.log(gameList);
};
