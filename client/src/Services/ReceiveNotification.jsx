//import { collection } from "@firebase/firestore";
import { db } from "./firebase-config";
import React from 'react'
import { useEffect } from "react";


const getNotifications = async () =>{
    db.collection("NotificationCollection").get().then((querySnapshot)=> {
        querySnapshot.forEach(element => {
              console.log(element.data())  ;
        })
      });

    
}

const ReceiveNotification = () => {
    useEffect((()=>{
        getNotifications();
    }));
  return (
    <div>
      
    </div>
  )
}

export default ReceiveNotification
