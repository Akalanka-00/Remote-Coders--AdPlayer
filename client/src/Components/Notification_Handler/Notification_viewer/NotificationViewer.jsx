import React, { useEffect, useState } from 'react'
import get_notification_api from '../../../Apis/get_notification_api'

const NotificationViewer = () => {

    const [notification, setNotification] = useState([])
    async function getNotificationData(){
       const data = await get_notification_api();
       console.log(data)
    }

    useEffect(()=>{
        getNotificationData();
    },[])

  return (
    <div>
      {console.log(notification)}
    </div>
  )
}

export default NotificationViewer
