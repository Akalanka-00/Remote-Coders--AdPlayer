const collectionList = require("../service/Collections");

const data = [
  {
    name: "test-ad",
    duration_in_days: 20,
    publish_date: new Date(),
    ad_type_id: "",
    resolution_id: 0,
    target_view_count: 100,
    status: "pending",
    country: "UK",
    target_games: [],
    price:50,
  },
  {
    name: "test-ad2",
    duration_in_days: 20,
    publish_date: new Date(),
    ad_type_id: "",
    resolution_id: 0,
    target_view_count: 1200,
    status: "pending",
    country: "UK",
    target_games: [],
    price:500,

  },
  {
    name: "test-ad3",
    duration_in_days: 22,
    publish_date: new Date(),
    ad_type_id: "",
    resolution_id: 0,
    target_view_count: 1000,
    status: "pending",
    country: "UK",
    target_games: [],
    price:20,

  },
  {
    name: "test-ad4",
    duration_in_days: 50,
    publish_date: new Date(),
    ad_type_id: "",
    resolution_id: 0,
    target_view_count: 100,
    status: "pending",
    country: "UK",
    target_games: [],
    price:100,

  },
  {
    name: "test-ad5",
    duration_in_days: 10,
    publish_date: new Date(),
    ad_type_id: "",
    resolution_id: 0,
    target_view_count: 100,
    status: "pending",
    country: "UK",
    target_games: [],
    price:300,

  },
];

function add_ads() {
    data.forEach(async (ad)=>{
        await collectionList.advertisementCollection.add(ad);
    })
}
add_ads()