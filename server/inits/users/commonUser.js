const collectionList = require("../../service/Collections");
const { getRandomElement } = require("../operations/common");
const { complain_data, notification_data, log_data } = require("../stores/data");
const { all_user_ids } = require("../stores/dynamic_data");


async function saveComplain(){

    for (const user_id of all_user_ids) {
        complain_data.sender_id=user_id;
        const ComplainRef = await collectionList.complainCollection.add(complain_data);
    }
    console.log("Complain data saved successfully")
}

async function saveNotification(){

    
        for (const notificatioin of notification_data) {
            notificatioin.send_user_id = getRandomElement(all_user_ids);
            const NotificationRef = await collectionList.notificationCollection.add(notificatioin);

        }
    
    console.log("Notification data saved successfully")
}

async function saveLogData(){

    for (const log of log_data) {
        log.contributor = getRandomElement(all_user_ids);
        const LogRef = await collectionList.logCollection.add(log);
    }
console.log("Log data saved successfully");
}

module.exports = {saveComplain,saveNotification,saveLogData}