import React, { useEffect, useState } from "react";
import baseUrl from "../../../Apis/baseUrl";
import get_notification_api from "../../../Apis/get_notification_api";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

const NotificationViewer = () => {
  const [notification, setNotification] = useState([]);

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userType, setUserType] = useState("Admin");
    const [userID, setUserID] = useState("");

  async function getNotificationData() {
    //  const data = await get_notification_api();
    //  console.log(data)

    baseUrl
      .get("/api/service/get/notification")
      .then((res) => {
        // console.log();
        // console.log(res.data)
        setNotification(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const GetMyUserIDModel = () => {
    
    function handleSubmit(){
      // setUserIDGlobal(userID);
      // setUserTypeGlobal(userType);

    }
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your user info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUserType">
              <Form.Label>User Type</Form.Label>
              <Form.Select
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === 1) {
                    setUserType("Admin");
                  } else if (val === 2) {
                    setUserType("Customer");
                  } else if (val === 3) {
                    setUserType("Developer");
                  }
                }}
              >
                <option value={1}>Admin</option>
                <option value={2}>Customer</option>
                <option value={3}>Developer</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="User ID"
                onChange={(e) => {
                  setUserID(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={()=>{
              handleSubmit();
              handleClose();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  function notification_data_validation(notificaiton_data) {
    const audience = notificaiton_data.target_audience;
    audience.map((audience_id)=>{
      if( audience_id ===userType){
        console.log("a id is "+audience_id + " a global is "+ userType);
       // return true;

      }
    })
    

    return false;
  }

  useEffect(() => {
    getNotificationData();
  }, []);

  return (
    <div>
      <GetMyUserIDModel />
      {show ? (
        ""
      ) : (
        <Table responsive variant="dark">
          <thead></thead>
          <tbody>
            {notification.map((notificaiton_data) => {
             // if (notification_data_validation(notificaiton_data)) {
                return (
                  <tr>
                    <Card>
                      <Card.Header as="h5">
                        {notificaiton_data.pushed_date}
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>{notificaiton_data.title}</Card.Title>
                        <Card.Text>{notificaiton_data.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </tr>
                );
            //  }
            })}
            <tr></tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default NotificationViewer;
