const db = require("../../../service/initialization")


module.exports = async function(req, res){
    const data = req.body;
    const notification_data = {
        title:data.title,
        description:data.desc,
        broadcast:data.broadcast,
        send_user_type:data.send_user_type,
        send_user_id:data.send_user_id,
        target_audience:data.target_audience, // if broadcast is true : [customer, developer, admin, sub-admin] else custom users
        pushed_date: data.pushed_date,

    }

    await db.collection("NotificationCollection").add(notification_data);
  res.send(notification_data);
}