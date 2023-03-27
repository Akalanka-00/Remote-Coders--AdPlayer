const db = require("../service/initialization");

const daly_activity = [
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 10, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
  { day: 20, date: "2022-03-12" },
];

const monthly_activity = [
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
  { month: 500, date: "2022-02" },
];
const data = [
  {
    ad_unit_name: "",
    ad_unit_type: "AprxYV1MzYV18KnJxMg6",
    no_of_req_ad_monthly: daly_activity,
    no_of_req_ad_daily: monthly_activity,
    created_date:"2022-01-23",
    created_time:"18:54:12",
  },
  {
   ad_unit_name: "",
   ad_unit_type: "AprxYV1MzYV18KnJxMg6",
   no_of_req_ad_monthly: daly_activity,
   no_of_req_ad_daily: monthly_activity,
   created_date:"2022-01-23",
   created_time:"18:54:12",
  },
  {
   ad_unit_name: "",
   ad_unit_type: "AprxYV1MzYV18KnJxMg6",
   no_of_req_ad_monthly: daly_activity,
   no_of_req_ad_daily: monthly_activity,
   created_date:"2022-01-23",
   created_time:"18:54:12",
  },
];

data.forEach(async (element) => {
  await db
    .collection("AdUnitCollection")
    .add(element)
    .then((doc) => console.log(doc.id));
});
