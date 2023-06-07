const collectionList = require("../service/Collections");

const ad_units = [
  "1NtnfgRxa9Gpzur7V2zr",
  "2NqQj7J1sNnYCyJMf5gw",
  "NrFGNt68Z8toBOU1QzqA",
  "QVUSbjj2SyM5l8r14ufb",
];
const daly_activity = [
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 10, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
  { view_count: 20, date: "2022-03-12" },
];

const monthly_activity = [
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
  { view_count: 500, date: "2022-02" },
];

function arr_count(arr){
  let tot = 0;
  arr.forEach((element)=>{
    tot+= element.view_count
  })

  return tot;
}
const data = [
  {
    ad_unit_name: "",
    ad_unit_type: ad_units[0],
    no_of_req_ad_daily: daly_activity,
    no_of_req_ad_monthly: monthly_activity,
    created_date: new Date(),
    total_daily_view_count:arr_count(daly_activity),
    total_monthly_view_count:arr_count(monthly_activity),

  },
  {
    ad_unit_name: "",
    ad_unit_type: ad_units[1],
    no_of_req_ad_daily: daly_activity,
    no_of_req_ad_monthly: monthly_activity,
    created_date: new Date(),
    total_daily_view_count:arr_count(daly_activity),
    total_monthly_view_count:arr_count(monthly_activity),
  },
  {
    ad_unit_name: "",
    ad_unit_type: ad_units[2],
    no_of_req_ad_daily: daly_activity,
    no_of_req_ad_monthly: monthly_activity,
    created_date: new Date(),
    total_daily_view_count:arr_count(daly_activity),
    total_monthly_view_count:arr_count(monthly_activity),
  },
  {
    ad_unit_name: "",
    ad_unit_type: ad_units[3],
    no_of_req_ad_daily: daly_activity,
    no_of_req_ad_monthly: monthly_activity,
    created_date: new Date(),
    total_daily_view_count:arr_count(daly_activity),
    total_monthly_view_count:arr_count(monthly_activity),
  },
  {
    ad_unit_name: "",
    ad_unit_type: ad_units[0],
    no_of_req_ad_daily: daly_activity,
    no_of_req_ad_monthly: monthly_activity,
    created_date: new Date(),
    total_daily_view_count:arr_count(daly_activity),
    total_monthly_view_count:arr_count(monthly_activity),
  },
  {
    ad_unit_name: "",
    ad_unit_type: ad_units[1],
    no_of_req_ad_daily: daly_activity,
    no_of_req_ad_monthly: monthly_activity,
    created_date: new Date(),
    total_daily_view_count:arr_count(daly_activity),
    total_monthly_view_count:arr_count(monthly_activity),
  },
  {
    ad_unit_name: "",
    ad_unit_type: ad_units[2],
    no_of_req_ad_daily: daly_activity,
    no_of_req_ad_monthly: monthly_activity,
    created_date: new Date(),
    total_daily_view_count:arr_count(daly_activity),
    total_monthly_view_count:arr_count(monthly_activity),
  },
  {
    ad_unit_name: "",
    ad_unit_type: ad_units[3],
    no_of_req_ad_daily: daly_activity,
    no_of_req_ad_monthly: monthly_activity,
    created_date: new Date(),
    total_daily_view_count:arr_count(daly_activity),
    total_monthly_view_count:arr_count(monthly_activity),
  },
];

async function getGame() {
  const gameCollection =
    await collectionList.gameCollection.get();
  const gameDevList = gameCollection.docs.map((doc) => ({
    id: doc.id,
  }));
  return getRandomElement(gameDevList);
}

function getRandomElement(arr) {
  const randomElement = arr[Math.floor(Math.random() * (arr.length-1))];
  return randomElement;
}


module.exports =async function AdUnitCollection() {
  data.forEach(async (element) => {
    await collectionList.adUnitCollection
      .add(element)
      .then(async (doc) => {
      //  console.log(doc.id)
      const game = await getGame();
      const gamelist = game;
      collectionList.gameCollection.doc(game.id).get()
      .then((game_doc)=>{
        const current_ad_units = game_doc.data().ad_units;
        current_ad_units.push(doc.id);
        collectionList.gameCollection.doc(game.id).update({
          ad_units: current_ad_units,
        }).then((res)=>{})
        });
      })
      
  });

  //console.log(data);

};
