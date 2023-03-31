const db = require("../../../service/initialization")


module.exports = async function get_notification(req, res){
  const available_Notification_Snapshot = await db.collection("NotificationCollection")
  .orderBy("pushed_date")     
  .get();
  const available_Notification_List = available_Notification_Snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}));

     res.send(available_Notification_List)
  console.log("Success")

 // res.json({msg: "Notification get successfully"});
}