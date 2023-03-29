const { default: baseUrl } = require("./baseUrl")

module.exports = async function(title, desc, broadcast, send_user_type, send_user_id, target_audience){
    const notification_data = {
        title:title,
        desc:desc,
        broadcast:broadcast,
        send_user_type:send_user_type,
        send_user_id:send_user_id,
        target_audience:target_audience, // if broadcast is true : [customer, developer, admin, sub-admin] else custom users
        pushed_date: new Date(),
    };

    baseUrl.post("/api/service/push/notification", notification_data)
    .then((res)=>{
        return 100;
        //console.log(res.data)
    })
    .catch((err) => {
        console.log(err);
        return 0;
      });
      console.log(notification_data);
      
}