function get_revenue_factor(type_id, ad_unit_type_list){
    let ratio = 0;
    ad_unit_type_list.map((ad_unit_type)=>{
        console.log(ad_unit_type.id + " "+ type_id)
        if(type_id=== ad_unit_type.id){
            const media_type_ratio = ad_unit_type.media_type_ratio;
            const ratio_per_ad = ad_unit_type.ratio_per_ad;
            const ratio_per_day = ad_unit_type.ratio_per_day;
            const revenue_per_thousand_add = ad_unit_type.revenue_per_thousand_add;
    
             ratio = media_type_ratio*ratio_per_ad*ratio_per_day*revenue_per_thousand_add/1000;
            console.log(ratio)
            //return ratio;
        }
       
    })
    return ratio;

}

function get_revenue(view_count, type_id, ad_unit_type_list) {
    const revenue_factor = get_revenue_factor(type_id, ad_unit_type_list);
    let daily_revenue = view_count* revenue_factor;
    //console.log(revenue_factor)

    return daily_revenue;

}

function get_ad_unit_data(ad_units, ad_unit_list, ad_unit_type_list) {
  let daily_revenue = 0;
  ad_unit_list.map((available_ad_units) => {
    ad_units.map((selected_ad_unit_id) => {
      if (selected_ad_unit_id === available_ad_units.id) {
        daily_revenue =
          daily_revenue +
          get_revenue(
            available_ad_units.total_daily_req,
            available_ad_units.ad_unit_type,
            ad_unit_type_list
          );
      }
    });
  });

  return daily_revenue;
}
function get_game_data(
  game_id_list,
  game_list,
  ad_unit_list,
  ad_unit_type_list
) {
  let daily_revenue = 0;

  game_list.map((available_games) => {
    game_id_list.map((selected_game) => {
      if (selected_game === available_games.id) {
        //console.log("revenue"+ selected_game)
        daily_revenue =
          daily_revenue +
          get_ad_unit_data(
            available_games.ad_units,
            ad_unit_list,
            ad_unit_type_list
          );
      }
    });
  });

  return daily_revenue;
}

module.exports = function get_daily_revenue(
  game_id_list,
  game_list,
  ad_unit_list,
  ad_unit_type_list
) {
  let daily_revenue = 0;
  daily_revenue =
    daily_revenue +
    get_game_data(game_id_list, game_list, ad_unit_list, ad_unit_type_list);

  return daily_revenue;
};
