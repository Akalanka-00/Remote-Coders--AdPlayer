const collectionList = require("../../service/Collections");

async function get_revenue_factor(ad_type_id) {
  const adTypeRef = await collectionList.adTypeCollection.doc(ad_type_id).get();
  const ad_data = adTypeRef.data();
  return (
    ad_data.revenue_per_thousand_add *
    ad_data.media_type_ratio *
    ad_data.ratio_per_ad
  );
}

async function get_games(user_data_id){
   const developerCollection = await collectionList.developerCollection.doc(user_data_id).get();
   return developerCollection.data().games;
}

async function get_revenue_from_ad_units(ad_unit_list){

let daily_revenue=0;
let monthly_revenue=0;
for (const ad_unit of ad_unit_list) {
      const adUnitCollection = await collectionList.adUnitCollection.doc(ad_unit).get();
      const revenue_factor = await get_revenue_factor(adUnitCollection.data().ad_unit_type);

      daily_revenue += revenue_factor*adUnitCollection.data().total_daily_view_count;
      monthly_revenue += revenue_factor*adUnitCollection.data().total_monthly_view_count;
   }
 //  console.log(daily_revenue,monthly_revenue)
   return {daily:daily_revenue, monthly:monthly_revenue};
}

async function get_revenue_from_games(game_id){
   const gameCollection = await collectionList.gameCollection.doc(game_id).get();
   const gameData = gameCollection.data();
   return await get_revenue_from_ad_units(gameData.ad_units);
}

async function get_revenue_from_devs(game_list, isDaily){
   const revenue = {daily:0, monthly:0};
   for (const element of game_list) {
      const revenue_from_games = await get_revenue_from_games(element);
     // console.log(revenue_from_games);
      revenue.daily += revenue_from_games.daily;
      revenue.monthly += revenue_from_games.monthly;
   }
  // console.log(revenue)
   return revenue;
}

module.exports = async function game_developer_ad_revenue(req, res) {
  try {
    const userCollection = await collectionList.userCollection.get();
    const user_revenue_list = await Promise.all(
      userCollection.docs
        .filter((doc) => doc.data().user_type === "developer")
        .map(async (doc, index) => {
          const data = doc.data();
          //console.log(data);
          const games = await get_games(data.user_data_id);
          const revenue = await get_revenue_from_devs(games);
          const no_of_games = games.length;
          
          return {
            id: doc.id,
            username: data.username,
            profile: data.profile,
            email: data.email,
            no_of_games: no_of_games,
            daily_revenue: revenue.daily.toFixed(2),
            monthly_revenue: revenue.monthly.toFixed(2),

          };
        })
    );
    res.send(user_revenue_list);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
