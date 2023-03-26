import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

import { db } from "../../../Services/firebase-config"
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  WhereFilterOp,
} from "firebase/firestore";
import DeveloperNotificationCard from "./DeveloperNotificationCard";

const DeveloperNotification = () => {
  const notificationCollectionRef = collection(db, "NotificationCollection");
  const [notificationData, setNotificationData] = useState([]);

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

  function NotificationModel(props) {
    let count = 0;
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Notifications
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            {notificationData.map((element, index) => (
              <div key={index}>
                {count < 3 && element.customer_broadcast ? (
                  <>
                    <Row>
                      {(count = count + 1)}
                      <DeveloperNotificationCard notificationData={element} />
                    </Row>
                  </>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button href="developer/all" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="notification-container">
      <div className="notification-btn">
        <div className="notofications">
          <NotificationModel
            show={modalShow}
            onHide={() => setModalShow(false)}
          />{" "}
        </div>

        <Button variant="primary" onClick={() => setModalShow(true)}>
          Notifications
        </Button>
      </div>
    </div>
  );
};

export default DeveloperNotification;
