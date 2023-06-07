const collectionList = require("../service/Collections")


const notification_data=[
    {
        title:"Hello",
        description:"Greetings All users",
        type:"warning",
        broadcast_admin:true,
        broadcast_customer:true,
        broadcast_developer:true,
        send_user_id:"admin-0001",
        customer_target_audience:[], 
        developer_target_audience:[], 
        admin_target_audience:[],
        expire_date:new Date(),
        pushed_date: new Date(),

    },

    {
        title:"Hello",
        description:"Greetings All Customers",
        type:"warning",
        broadcast_admin:false,
        broadcast_customer:true,
        broadcast_developer:false,
        send_user_id:"admin-0001",
        customer_target_audience:[], 
        developer_target_audience:[], 
        admin_target_audience:[],
        expire_date:new Date(),
        pushed_date: new Date(),

    },

    {
        title:"Hello",
        description:"Greetings All Developers",
        type:"warning",
        broadcast_admin:false,
        broadcast_customer:false,
        broadcast_developer:true,
        send_user_id:"admin-0001",
        customer_target_audience:[], 
        developer_target_audience:[], 
        admin_target_audience:[],
        expire_date:new Date(),
        pushed_date: new Date(),

    },

    {
        title:"Hello",
        description:"Greetings All Admins",
        type:"warning",
        broadcast_admin:true,
        broadcast_customer:false,
        broadcast_developer:false,
        send_user_id:"admin-0001",
        customer_target_audience:[], 
        developer_target_audience:[], 
        admin_target_audience:[],
        expire_date:new Date(),
        pushed_date: new Date(),

    },


]


module.exports = async function SaveNotificationData(){
    notification_data.forEach((data)=>{
        collectionList.notificationCollection.add(data)

    })
}