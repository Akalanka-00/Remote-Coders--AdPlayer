import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import send_notification_api from "../../Apis/send_notification_api";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBell } from "react-icons/fa";
import Form from "react-bootstrap/Form";

import "./NotificationHandler.css";
const NotificationHandler = () => {
  const [notificationData, setNotificationData] = useState({
    title: "",
    description: "",
    broadcast: false,
    send_user_type: "",
    send_user_id: "",
    target_audience: [], // if broadcast is true : [customer, developer, admin, sub-admin] else custom users
  });
  const [isAdminChecked, setIsAdminChecked] = useState(false);
  const [isDeveloperChecked, setIsDeveloperChecked] = useState(false);
  const [isCustomerChecked, setIsCustomerChecked] = useState(false);

  async function sendNotification(
    title,
    desc,
    broadcast,
    send_user_type,
    send_user_id,
    target_audience
  ) {
    const result = await send_notification_api(
      // "Hii",
      // "This is a notification from frontend",
      // true,
      // ["customer", "developer", "admin"]

      title,
      desc,
      broadcast,
      send_user_type,
      send_user_id,
      target_audience
    );

    //Check the results
    if (result === 0) {
      console.log("Nothing Happened");
    } else {
      console.log("Something Happened");
    }
  }

  //Get the target audience
  function get_target_audience() {
    let arr = [];
    if (isAdminChecked) arr.push("Admin");

    if (isCustomerChecked) arr.push("Customer");

    if (isDeveloperChecked) arr.push("Developer");

    return arr;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(notificationData);
    //validation
    const result =
      !notificationData.send_user_id ||
      !notificationData.description ||
      !notificationData.title ||
      (!isAdminChecked && !isCustomerChecked && !isDeveloperChecked);
    if (!result) {
      //check the empty fields
      sendNotification(
        notificationData.title,
        notificationData.description,
        true,
        notificationData.send_user_type,
        notificationData.send_user_id,
        get_target_audience()
      );
    } else {
      alert("Fill all the fields");
    }
  }
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>

              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <a
              className="notification"
              href="notification/new"
              onClick={() => {
                console.log("clicked");
              }}
            >
              <FaBell />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Send notification */}
      <div className="form-container">
        <Form className="notification-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUserType">
            {/* Select logged user type */}
            <Form.Label>User Type</Form.Label>
            <Form.Select
              onChange={(e) => {
                const val = e.target.value;
                if (val === 1) {
                  setNotificationData({
                    ...notificationData,
                    send_user_type: "Admin",
                  });
                } else if (val === 2) {
                  setNotificationData({
                    ...notificationData,
                    send_user_type: "Customer",
                  });
                } else if (val === 3) {
                  setNotificationData({
                    ...notificationData,
                    send_user_type: "Developer",
                  });
                }
              }}
            >
              <option value={1}>Admin</option>
              <option value={2}>Customer</option>
              <option value={3}>Developer</option>
            </Form.Select>
          </Form.Group>

          {/* Enter logged user id */}
          {/* Get senders user ID */}
          <Form.Group className="mb-3" controlId="formUserID">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="User ID"
              onChange={(e) => {
                setNotificationData({
                  ...notificationData,
                  send_user_id: e.target.value,
                });
              }}
            />
          </Form.Group>

          {/* Get notification title */}
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setNotificationData({
                  ...notificationData,
                  title: e.target.value,
                });
              }}
            />
          </Form.Group>

          {/* Get Notification Description */}
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                setNotificationData({
                  ...notificationData,
                  description: e.target.value,
                });
              }}
            />
          </Form.Group>

          {/* Broadcast Options */}
          <Form.Check
            type="radio"
            label="Broadcast notification for selected user types"
            name="broadcast"
            value={true}
            checked={notificationData.broadcast === true}
            onChange={(e) => {
              setNotificationData({
                ...notificationData,
                broadcast: e.target.value,
              });
            }}
          />

          <Form.Check
            type="radio"
            label="Broadcast notification for selected users (currently not available)"
            name="broadcast"
            value={false}
            checked={notificationData.broadcast === false}
            onChange={(e) => {
              setNotificationData({
                ...notificationData,
                broadcast: e.target.value,
              });
            }}
          />

          <br></br>
          <h2>Select Target Audience</h2>

          {/* Select target audiences */}
          <Form.Check
            type="checkbox"
            label="Admin"
            checked={isAdminChecked}
            onChange={(e) => {
              setIsAdminChecked(e.target.checked);
            }}
          />

          <Form.Check
            type="checkbox"
            label="Customer"
            checked={isCustomerChecked}
            onChange={(e) => {
              setIsCustomerChecked(e.target.checked);
            }}
          />

          <Form.Check
            type="checkbox"
            label="Developer"
            checked={isDeveloperChecked}
            onChange={(e) => {
              setIsDeveloperChecked(e.target.checked);
            }}
          />

          {/* <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Selected User ID</Form.Label>
            <Form.Control type="text" placeholder="Title" disabled />
          </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NotificationHandler;
