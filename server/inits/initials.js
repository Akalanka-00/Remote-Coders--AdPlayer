

//Initial functions

const collectionList = require("../service/Collections");
const { ad_types, game_types } = require("./stores/data");
const { ad_type_ids, game_type_ids } = require("./stores/dynamic_data");

async function SaveAdTypes() {
    for (const ad_type of ad_types) {
      const adTypeCollection = await collectionList.adTypeCollection.add(ad_type);
      ad_type_ids.push(adTypeCollection.id);
    }
  
    console.log("Ad types saves successfully");
  }
  
  async function SaveGameTypes() {
    for (const game_type of game_types) {
      const gameTypeCollection = await collectionList.gameTypeCollection.add(
        game_type
      );
      game_type_ids.push(gameTypeCollection.id);
    }
    game_types.forEach((type) => {
      collectionList.gameTypeCollection.add(type);
    });
  
    console.log("Game types saves successfully");
  }

  module.exports = {SaveAdTypes,SaveGameTypes}