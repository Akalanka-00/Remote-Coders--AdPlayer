const db = require("../../../service/initialization");

function calculate_total_daily_revenue(arr){
    tot = 0;
    arr.map((item)=>{
       // console.log(item.view_count);
        tot = tot + item.view_count;
    })
    return tot;
}
function get_ad_unit_view_count(ad_units, ad_unit_list){

    var total_ad_view_count = 0;
    ad_unit_list.map((available_ad_unit)=>{
        ad_units.map((selected_ad_unit_id)=>{
            if(selected_ad_unit_id == available_ad_unit.id){
                total_ad_view_count = total_ad_view_count + available_ad_unit.total_daily_req;
            }
        })
    })

return total_ad_view_count;
}
function get_game_view_count(game_arr, game_data, ad_unit_list){
    var total_ad_view_count = 0;
    game_data.map((avaiable_games)=>{
        game_arr.map((selected_game_id)=>{
            if(selected_game_id == avaiable_games.id){
                total_ad_view_count = total_ad_view_count + get_ad_unit_view_count(avaiable_games.ad_units, ad_unit_list);
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
          total_daily_req: calculate_total_daily_revenue(doc.data().no_of_req_ad_daily)
      }));

      dev_list.map((dev)=>{
        //console.log(dev)
        if(dev.games.length!=0){
            const game_view_count = get_game_view_count(dev.games,game_list,ad_unit_list);
            const no_of_games = game_list.length;
            console.log(no_of_games);
            const result_item = {
                developer_name: dev.username,
                developer_id: dev.id,
                developer_mail: dev.email,
                no_of_games: game_list.length,
                game_view_count:game_view_count,
            }

            result.push(result_item);
        }
       
      })


      
      res.send( result)
}