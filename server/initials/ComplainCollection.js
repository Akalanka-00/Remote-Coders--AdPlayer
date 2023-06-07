const collectionList = require("../service/Collections")


const complain_data =[
    {
        title:"Hello",
        description:"This complain about...",
        evidence:"", //Uploading snapshot or something
        status:false,
        sender_id:"",
        complained_date:new Date(),

    },

    {
        title:"Hello",
        description:"This complain about...",
        evidence:"", //Uploading snapshot or something
        status:false,
        sender_id:"",
        complained_date:new Date(),

    },

   


]


module.exports = async function SaveComplainData(){
    complain_data.forEach((data)=>{
        collectionList.complainCollection.add(data)

    })
}