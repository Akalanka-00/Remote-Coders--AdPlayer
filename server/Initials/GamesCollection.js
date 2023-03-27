const db = require("../service/initialization")
const adUnit_id_list=["aC0WMuKKVPA0wGbG7zD9","fbPrboVtH7Xbgniw7Na5","kCIIzL5Q1VrVVGoDoH6k"]

const data = [{
   game_name:"Test Game",
   game_icon:"",
   published_date:"",
   platform:"Android",
   rank:0,
   Status:"Pending",
   game_type:"7ygg4RuADnqIuspx8yap",
   ad_units:adUnit_id_list,
 
},
{
    game_name:"Test Game",
    game_icon:"",
    published_date:"",
    platform:"Android",
    rank:0,
    Status:"Rejected",
    game_type:"7ygg4RuADnqIuspx8yap",
    ad_units:adUnit_id_list,
  
 },
 {
    game_name:"Test Game",
    game_icon:"",
    published_date:"",
    platform:"IOS",
    rank:0,
    Status:"Ongoing",
    game_type:"7ygg4RuADnqIuspx8yap",
    ad_units:adUnit_id_list,
  
 },
]


data.forEach(async (element)=>{
    await db.collection("GamesCollection").add(element);

})