import React from "react";
import Card from "react-bootstrap/Card";

import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="heading">
        <font className="title">Contact Us</font>
      </div>

      <div className="contact-content">

        <div className="card-holder">
        <Card className="contact-card">
          <Card.Body className="card-body">
            <div className="contact-icon">
              gfj
            </div>

            <div className="contact-detail">
            hello@voasiz.com
            </div>

          </Card.Body>
        </Card>
        </div>

        <div className="card-holder">
        <Card className="contact-card">
          <Card.Body className="card-body">This is some text within a card body.</Card.Body>
        </Card>
        </div>

        <div className="card-holder">
        <Card className="contact-card">
          <Card.Body className="card-body">This is some text within a card body.</Card.Body>
        </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
