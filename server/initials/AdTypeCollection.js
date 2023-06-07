const collectionList = require("../service/Collections");

const data = [{
    ad_type:"Banner",
    media_type:"image",
    revenue_per_thousand_add:1,
    description:"Rectangular ads that occupy a portion of an app's layout; can be refreshed automatically after a period of time.",
    ad_logo:"",
    media_type_ratio:0.1,
    ratio_per_ad: 0.3,
    ratio_per_day: 1.4,
    resolution: [{x:100, y:100, ratio_per_res:1.1},{x:100, y:100, ratio_per_res:1.5},{x:100, y:100, ratio_per_res:1.7}]
},
{
    ad_type:"Interstitial",
    media_type:"image",
    revenue_per_thousand_add:1.5,
    description:"Full-page ad format that appears at natural breaks and transitions, such as level completion",
    ad_logo:"",
    media_type_ratio:0.1,
    ratio_per_ad: 1.3,
    ratio_per_day: 1.4,
    resolution: [{x:100, y:100, ratio_per_res:1.1},{x:100, y:100, ratio_per_res:1.5},{x:100, y:100, ratio_per_res:1.7}]
},
{
    ad_type:"Rewarded interstitial",
    media_type:"image",
    revenue_per_thousand_add:2,
    description:"Full-page ad format that rewards users for viewing ads during natural breaks or transitions.",
    ad_logo:"",
    media_type_ratio:0.1,
    ratio_per_ad: 1.3,
    ratio_per_day: 1.4,
    resolution: [{x:100, y:100, ratio_per_res:1.1},{x:100, y:100, ratio_per_res:1.5},{x:100, y:100, ratio_per_res:1.7}]
},
{
    ad_type:"Rewarded",
    media_type:"video",
    revenue_per_thousand_add:5,
    description:"Full-page ad format that rewards users who choose to view an ad. Unlike rewarded interstitial, users must opt in to view the ad",
    ad_logo:"",
    media_type_ratio:0.6,
    ratio_per_ad: 1.3,
    ratio_per_day: 1.4,
    resolution: [{x:100, y:100, ratio_per_res:1.1},{x:100, y:100, ratio_per_res:1.5},{x:100, y:100, ratio_per_res:1.7}]
},
]

module.exports = function AdTypeCollection(){
    console.log("Ad Types...............")
    data.forEach(async (element)=>{

        collectionList.adTypeCollection.add(element).then((doc)=>{
            console.log(doc.id);
        })
    
    })
}
