import React from "react";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

import "./Footer.css";

import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div>
        <Container>
          <Row className="row">
            <div className="social-list">
              <div className="social-title">Follow Us</div>
              <div className="social-item">
                <a href="#">
                  <BsTwitter />
                </a>
              </div>
              <div className="social-item">
                <a href="#">
                  <AiFillLinkedin />
                </a>
              </div>
              <div className="social-item">
                <a href="#">
                  <BsFacebook />
                </a>
              </div>
            </div>
          </Row>
          <Row>
            <Col sm className="col">
              <div className="footer-title">About AdPlayer</div>
              <div className="footer-item">
                <a href="#">Overview</a>
              </div>
              <div className="footer-item">
                <a href="#">About AdPlayer</a>
              </div>
              <div className="footer-item">
                <a href="#">For Game Devolopers</a>
              </div>
              <div className="footer-item">
                <a href="#">For Customers</a>
              </div>
              <div className="footer-item">
                <a href="#">Experiences</a>
              </div>
              <div className="footer-item">
                <a href="#">Contact</a>
              </div>
            </Col>

            <Col sm className="col">
              <div className="footer-title">Learning & Support </div>
              <div className="footer-item">
                <a href="#">You Tube</a>
              </div>
              <div className="footer-item">
                <a href="#">Blog</a>
              </div>
              <div className="footer-item">
                <a href="#">SDK</a>
              </div>
              <div className="footer-item">
                <a href="#">Support</a>
              </div>
            </Col>

            <Col sm className="col">
              <div className="footer-title">Devolopers & Partners</div>
              <div className="footer-item">
                <a href="#">VOASIZ</a>
              </div>
              <div className="footer-item">
                <a href="#">Unity</a>
              </div>
            </Col>

            <Col sm className="col">
              <div className="footer-title">Related Products</div>
              <div className="footer-item">
                <a href="#">Product 1</a>
              </div>
              <div className="footer-item">
                <a href="#">Product 2</a>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm>
              <div className="footer-card-holder">
                <div className="footer-contact-card">
                  <div className="footer-body">
                    <div className="footer-card-body">
                      <div className="footer-contact-icon">
                        <AiOutlineMail />
                      </div>

                      <div className="contact-detail">hello@voasiz.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm>
              <div className="footer-card-holder">
                <div className="footer-contact-card">
                  <div className="footer-body">
                    <div className="footer-card-body">
                      <div className="footer-contact-icon">
                        <AiOutlineHome />
                      </div>
                      <div className="row-list">
                        <div className="row-item">
                          VOASIZ (PVT) Ltd, N0 188/2,
                        </div>
                        <div className="row-item">Pahala Yagoda,</div>
                        Ganemulla. Sri Lanka.
                        <div className="row-item"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm>
              <div className="footer-card-holder">
                <div className="footer-contact-card">
                  <div className="footer-body">
                    <div className="footer-card-body">
                      <div className="footer-contact-icon">
                        <FiPhone />
                      </div>
                      <div className="contact-detail">
                        <div className="row-list">
                          <div className="row-item">+94 77 406 8783</div>
                          <div className="row-item">+94 77 519 0167</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="footer_copyright">
        <small>&copy; Akalanka. All right reserved</small>
      </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
