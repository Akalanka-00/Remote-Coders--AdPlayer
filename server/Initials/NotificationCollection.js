const db = require("../service/initialization")


const data = [
    {
        title:"Hello",
        description:"Greetings All users",
        broadcast:true,
        send_user_type:"admin",
        send_user_id:"admin-0001",
        target_audience:["customer", "developer"], // if broadcast is true : [customer, developer, admin, sub-admin] else custom users
        pushed_date: new Date(),

    },
    {
        title:"Hello",
        description:"Greetings All Developers",
        broadcast:true,
        send_user_type:"admin",
        send_user_id:"admin-0001",
        target_audience:[ "developer"], // if broadcast is true : [customer, developer, admin, sub-admin] else custom users
        pushed_date: new Date(),

    },
    {
        title:"Hello",
        description:"Greetings All Customers",
        broadcast:true,
        send_user_type:"admin",
        send_user_id:"admin-0001",
        target_audience:["customer"], // if broadcast is true : [customer, developer, admin, sub-admin] else custom users
        pushed_date: new Date(),

    },
    {
        title:"Hello",
        description:"Greetings All Users & Admin",
        broadcast:true,
        send_user_type:"admin",
        send_user_id:"admin-0001",
        target_audience:["customer","developer", "admin"], // if broadcast is true : [customer, developer, admin, sub-admin] else custom users
        pushed_date: new Date(),

    },
    {
        title:"Hello",
        description:"Greetings Selected Developer",
        broadcast:true,
        send_user_type:"admin",
        send_user_id:"admin-0001",
        target_audience:["5MClGNoJkSW9R3ZbArRA","9N59H8ZvAjrm7cRJaDfn"], // if broadcast is true : [customer, developer, admin, sub-admin] else custom users
        pushed_date: new Date(),

    },
]

data.forEach(async (element)=>{
    await db.collection("NotificationCollection").add(element);

})