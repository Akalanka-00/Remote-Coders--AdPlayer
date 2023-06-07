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

  async function get_today_viewcount(arr) {
    const today = new Date();
    let view_count = 0;
    arr.forEach((data) => {
      // Get the date portion of the data object
      const today = new Date();
  
      // Compare the date portion of the data object with today's date
      //console.log(data.view_count);
      console.log(data.date, today.getDate())

      if (data.date === today.getDate()) {
        console.log("this is "+data.view_count);
        view_count += data.view_count;
      }
    });
    return view_count;
  }
  

async function get_revenue_from_ad_units(ad_unit_list){

    let daily_revenue=0;
    let monthly_revenue=0;
    for (const ad_unit of ad_unit_list) {
          const adUnitCollection = await collectionList.adUnitCollection.doc(ad_unit).get();
          const revenue_factor = await get_revenue_factor(adUnitCollection.data().ad_unit_type);
          const today_view_count =await get_today_viewcount(adUnitCollection.data().no_of_req_ad_daily);
         // console.log(today_view_count)
          daily_revenue += revenue_factor*today_view_count;
          monthly_revenue +=0;
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

    async function get_games(dev_data_id){
        const developerCollection = await collectionList.developerCollection.doc(dev_data_id).get();
        return developerCollection.data().games;
     }


 module.exports = async function get_today_revenue(req,res){

    const {user_id} = req.body; //3Asj4ijVZGTgTWZpt6PO
    
try {
    
    const userCollection = await collectionList.userCollection.get();
    const user_revenue_list = await Promise.all(
        userCollection.docs
          .filter((doc) => doc.id === user_id)
          .map(async (doc, index) => {
            const data = doc.data();
            //console.log(data);
            const games = await get_games(data.dev_data_id);
            const revenue = await get_revenue_from_devs(games);
            
            return {
              id: doc.id,
              username: data.username,
              profile: data.profile,
              email: data.email,
              daily_revenue: revenue.daily.toFixed(2),
              monthly_revenue: revenue.monthly.toFixed(2),
  
            };
          })
      );
      console.log(user_revenue_list)
res.send(user_revenue_list);

} catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

 