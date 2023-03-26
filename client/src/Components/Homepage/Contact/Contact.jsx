import React from "react";
import Card from "react-bootstrap/Card";

import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { FiPhone } from "react-icons/fi"

import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-heading">
        <font className="contact-title">Contact Us</font>
      </div>

      <div className="contact-content">
        <div className="card-holder">
          <Card className="contact-card">
            <Card.Body>
              <div className="card-body">
                <div className="contact-icon">
                  <AiOutlineMail />
                </div>

                <div className="contact-detail">hello@voasiz.com</div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="card-holder">
          <Card className="contact-card">
            <Card.Body>
              <div className="card-body">
                <div className="contact-icon">
                  <AiOutlineHome />
                </div>

                <div className="contact-detail">
                  <div className="row-list">
                    <div className="row-item">VOASIZ (PVT) Ltd, N0 188/2,</div>
                    <div className="row-item">Pahala Yagoda,</div>
                    Ganemulla. Sri Lanka.
                    <div className="row-item"></div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="card-holder">
          <Card className="contact-card">
            <Card.Body>
              <div className="card-body">
                <div className="contact-icon">
                  <FiPhone />
                </div>

                <div className="contact-detail">
                  <div className="row-list">
                    <div className="row-item">+94 77 406 8783</div>
                    <div className="row-item">+94 77 519 0167</div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
