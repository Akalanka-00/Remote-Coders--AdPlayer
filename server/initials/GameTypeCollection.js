const collectionList = require("../service/Collections")

const GameTypes = [{
    type_name:"Multiplayer",
    type_description:"This is a multiplayer Game.Maximum Number of 5 people can join."
},

{
    type_name:"Acrade",
    type_description:"This is a multiplayer Game.Maximum Number of 5 people can join."
},

{
    type_name:"Shooting",
    type_description:"This is a multiplayer Game.Maximum Number of 5 people can join."
},
]

module.exports = function GameTypeCollection(){
    GameTypes.forEach((type)=>{
        collectionList.gameTypeCollection.add(type);

    })
}