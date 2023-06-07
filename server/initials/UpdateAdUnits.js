const collectionList = require("../service/Collections");

const ad_units = [
  "1NtnfgRxa9Gpzur7V2zr",
  "2NqQj7J1sNnYCyJMf5gw",
  "NrFGNt68Z8toBOU1QzqA",
  "QVUSbjj2SyM5l8r14ufb",
];

function CalculateTotalAdViewCount(arr) {
    tot=0;
    arr.forEach((data)=>{
        tot = tot + data.view_count;
    })
    return tot;

    
}

async function AdUnitCollection() {

    const adUnitCollection = await collectionList.adUnitCollection
    .get();

    const ad_unit_list = adUnitCollection.docs.map((doc) => ({
       id:doc.id,
       ...doc.data()
      }));

      ad_unit_list.forEach(async (ad_unit)=>{
        console.log(CalculateTotalAdViewCount(ad_unit.no_of_req_ad_daily), CalculateTotalAdViewCount(ad_unit.no_of_req_ad_monthly));
        const adUnitRef = await collectionList.adUnitCollection.doc(ad_unit.id).update({
            total_daily_view_count: CalculateTotalAdViewCount(ad_unit.no_of_req_ad_daily),
            total_monthly_view_count: CalculateTotalAdViewCount(ad_unit.no_of_req_ad_monthly),
        })
      })
};


AdUnitCollection();
