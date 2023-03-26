import React, { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import Button from "react-bootstrap/Button";

import { db } from "../../../Services/firebase-config"
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";

const NotificationPanel = ({ isDev }) => {
  const notificationCollectionRef = collection(db, "NotificationCollection");
  const q = query(
    notificationCollectionRef,
    orderBy("reviewed_by_user", "desc")
  );
  const [notificationData, setNotificationData] = useState([]);

  const [newNotify, setNewNotify] = useState([]);
  const [oldNotify, setOldNotify] = useState([]);
  useEffect(() => {
    onSnapshot(notificationCollectionRef, (snapshot) => {
      setNotificationData(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
    });
  }, []);

  return (
    <div className="notification-card-list">
      <div className="btn-container">
        <Button
          variant="primary"
          onClick={() => {
            // eslint-disable-next-line no-lone-blocks
            {
              notificationData.map((element, index) => {
                if (!element.reviewed_by_user && element.customer_broadcast) {
                  const updateComplainRef = doc(db, "NotificationCollection", element.id)
                  element.reviewed_by_user=true
                  updateDoc(updateComplainRef, element);

                }
              });
            }
          }}
        >
          Mark all as read
        </Button>
      </div>
      <div className="new-notification">
        {notificationData.map((element, index) => {
          if (!element.reviewed_by_user && !element.customer_broadcast==isDev) {
            return <NotificationCard key={index} notificationData={element} />;
          }
          if (!element.reviewed_by_user && element.developer_broadcast==isDev) {
            return <NotificationCard key={index} notificationData={element} />;
          }
        })}
      </div>

      <div className="new-notification">
        {notificationData.map((element, index) => {
          if (element.reviewed_by_user && element.customer_broadcast) {
            return <NotificationCard key={index} notificationData={element} />;
          }
        })}
      </div>
    </div>
  );
};

export default NotificationPanel;
