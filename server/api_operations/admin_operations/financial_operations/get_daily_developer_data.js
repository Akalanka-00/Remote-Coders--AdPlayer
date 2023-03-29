const db = require("../../../service/initialization");
const get_daily_revenue = require("./get_daily_revenue");

function calculate_total_ad_unit_revenue(arr){
    tot = 0;
    arr.map((item)=>{
       // console.log(item.view_count);
        tot = tot + item.view_count;
    })
    return tot;
}
function get_ad_unit_view_count(ad_units, ad_unit_list, isDaily){

    var total_ad_view_count = 0;
    ad_unit_list.map((available_ad_unit)=>{
        ad_units.map((selected_ad_unit_id)=>{
            if(selected_ad_unit_id == available_ad_unit.id){
                if(isDaily){
                    total_ad_view_count = total_ad_view_count + available_ad_unit.total_daily_req

                }else{
                    total_ad_view_count = total_ad_view_count + available_ad_unit.total_monthly_req

                }
           // console.log("Daily: "+available_ad_unit.total_daily_req);
           // console.log("Monthly: "+available_ad_unit.total_monthly_req);
            }
        })
    })

return total_ad_view_count;
}
function get_game_view_count(game_arr, game_data, ad_unit_list, isDaily){
    var total_ad_view_count = 0;
    game_data.map((avaiable_games)=>{
        game_arr.map((selected_game_id)=>{
            if(selected_game_id == avaiable_games.id){
                total_ad_view_count = total_ad_view_count + get_ad_unit_view_count(avaiable_games.ad_units, ad_unit_list, isDaily);
            }
        })
    })
    return total_ad_view_count;
}
module.exports =  async function get_daily_developer_data(req, res){

    let result = [];
    const developer_snapshot = await db
      .collection("DeveloperCollection")
      .orderBy("fname")
      .get();
  
      const dev_list = developer_snapshot.docs.map((doc)=>({
          id: doc.id, 
          username: doc.data().fname + " " + doc.data().lname, 
          email: doc.data().email,
          profile: doc.data().profile,
          games:doc.data().games,
          //total_revenue:getTotalRevenueOfDevelopers(doc.data().games),
      }));

      const game_snapshot = await db
      .collection("GamesCollection")
      .orderBy("game_name")
      .get();
  
      const game_list = game_snapshot.docs.map((doc)=>({
          id: doc.id, 
          ad_units:doc.data().ad_units,
      }));

      const ad_unit_list_snapshot = await db
      .collection("AdUnitCollection")
      .orderBy("ad_unit_name")
      .get();
  
      const ad_unit_list = ad_unit_list_snapshot.docs.map((doc)=>({
          id: doc.id, 
          ad_unit_type:doc.data().ad_unit_type,
          total_daily_req: calculate_total_ad_unit_revenue(doc.data().no_of_req_ad_daily),
          total_monthly_req:calculate_total_ad_unit_revenue(doc.data().no_of_req_ad_monthly),
      }));

      const ad_unit_type_list_snapshot = await db
      .collection("AdTypeCollection")
      .orderBy("ad_type")
      .get();
  
      const ad_unit_type_list = ad_unit_type_list_snapshot.docs.map((doc)=>({
          id: doc.id, 
          ...doc.data(),
      }));

      dev_list.map((dev)=>{
        //console.log(dev)
        if(dev.games.length!=0){
            const daily_game_view_count = get_game_view_count(dev.games,game_list,ad_unit_list, true);
            const monthly_game_view_count = get_game_view_count(dev.games,game_list,ad_unit_list, false);

            const no_of_games = game_list.length;
            //console.log(no_of_games);
            const result_item = {
                developer_profile:dev.profile,
                developer_name: dev.username,
                developer_id: dev.id,
                developer_mail: dev.email,
                no_of_games: game_list.length,
                daily_game_view_count:daily_game_view_count,
                monthly_game_view_count:monthly_game_view_count,
                daily_revenue:get_daily_revenue(dev.games, game_list,ad_unit_list,ad_unit_type_list),
            }

            result.push(result_item);
        }
       
      })


      
      res.send( result)
}