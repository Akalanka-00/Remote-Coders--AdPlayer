const collectionList = require("../service/Collections")

const logData = [{
    action: "login",
    contributor:"admin-001",
    affected_party:"system",
    date_and_time: new Date(),

},

{
    action: "delete user",
    contributor:"admin-001",
    affected_party:"7MAbSIcCkXE0dXa0K8M8",
    date_and_time: new Date(),

},

{
    action: "login",
    contributor:"admin-001",
    affected_party:"system",
    date_and_time: new Date(),

},

{
    action: "login",
    contributor:"admin-001",
    affected_party:"system",
    date_and_time: new Date(),

},
]

module.exports = async function saveLog(){
    logData.forEach((data)=>{
        collectionList.logCollection.add(data)

    })
}