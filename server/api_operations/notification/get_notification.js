const collectionList = require("../../service/Collections");

module.exports = async function getNotificationData(req, res) {

    const { user_id } = req.params; 
    const userRef = await collectionList.userCollection.doc(user_id).get();
    const userData = userRef.data()
    //console.log(userData);

   

    const notificationCollection = await collectionList.notificationCollection
    .where('send_user_id', '!=', user_id)
    .where(
      userData.user_type == 'developer'
        ? 'broadcast_developer'
        : userData.user_type == 'customer'
        ? 'broadcast_customer'
        : 'broadcast_admin',
      '==',
      true
    )
    .orderBy('send_user_id')
    .orderBy('pushed_date')
    .get();
  

    const notification_list = notificationCollection.docs.map((doc) => ({
        
        id:doc.id,
       ...doc.data(),
       isRead:userData.read_notifications.includes(doc.id)
      }));

      notification_list.sort((isReadA, isReadAB) => {
        if (isReadA.isRead === isReadAB.isRead) {
          return 0;
        } else if (isReadA.isRead) {
          return 1;
        } else {
          return -1;
        }
      });

  res.send(notification_list);
  //console.log(notification_list);
};
