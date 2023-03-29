import React from "react";
import Button from "react-bootstrap/esm/Button";
import send_notification_api from "../../Apis/send_notification_api";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBell } from 'react-icons/fa'
import Form from "react-bootstrap/Form";

import "./NotificationHandler.css";
const NotificationHandler = () => {
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

    if (result === 0) {
      console.log("Nothing Happened");
    } else {
      console.log("Something Happened");
    }
  }
  return (
    <div>
      {/* <Button
        onClick={async () => {
          await sendNotification(
            "Hii",
            "This is a notification from frontend",
            true,
            ["customer", "developer", "admin"]
          );
        }}
      >
        Send Notification
      </Button> */}
      <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <a className="notification" href="notification/new" onClick={()=>{
            console.log("clicked")
          }}>
            <FaBell/>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      <div className="form-container">
        <Form className="notification-form">
          <Form.Group className="mb-3" controlId="formUserType">
            <Form.Label>User Type</Form.Label>
            <Form.Select>
              <option>Admin</option>
              <option>Customer</option>
              <option>Developer</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Check
            className="form-radio-btn"
            label="Send to selected user type"
            name="grp-1"
            type="radio"
            value={3}
            id="radio-3"
            // checked={}
            onChange={(e) => {}}
          />

          <Form.Check
            className="form-radio-btn"
            label="Send to selected user"
            name="grp-1"
            type="radio"
            value={3}
            id="radio-3"
            // checked={}
            onChange={(e) => {}}
          />

          <Form.Group className="mb-3" controlId="formUserType">
            <Form.Label>User Type</Form.Label>
            <Form.Select>
              <option>Admin</option>
              <option>Customer</option>
              <option>Developer</option>
            </Form.Select>
          </Form.Group>

          <Form.Group  className="mb-3" controlId="formTitle">
            <Form.Label>Selected User ID</Form.Label>
            <Form.Control type="text" placeholder="Title" disabled/>
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NotificationHandler;
