import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { db } from "../../Services/firebase-config";


import "./Customer.css";
import "./CustomerDetails.css"

import PIC1 from "../../Assets/Slides/pic1.jpg";

const getNotifications = async () =>{
  db.collection("NotificationCollection").get().then((querySnapshot)=> {
      querySnapshot.forEach(element => {
            console.log(element.data())  ;
      })
    });

  
}
function CustomerDetails({ data }) {
  return <div className="customer-detail-container">
    <div className="customer-title">
      <h3>{data.title}</h3>
    </div>
    <div className="customer-des">
      <font>{data.description}</font>
    </div>
  </div>
}




function Customer() {
  const dataList = [
    { title: "Over 1M+", description: "Game Developers are connected" },
    { title: "Over 1M+", description: "Game Developers are connected" },
    { title: "Over 1M+", description: "Game Developers are connected" },

  ];

  return (
    <section className="developer-container" id="customer">
      <div className="heading">
        <div className="title">
          <h1>Growth your apps with us</h1>
        </div>
      </div>
      <div className="devoloper-content">
        <Container>
          <Row>
            
            <Col sm={6}>
              <div className="customer-picture-container">
                <img className="customer-picture" src={PIC1}/>
              </div>
            </Col>
            <Col sm={1}></Col>
            <Col sm={4}>
              {dataList.map((data,index)=>(
                <div key={index}>
                <CustomerDetails  data={data} />
              </div>
              ))}
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <p className="desc-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea facilis distinctio tenetur dolor praesentium porro dolorem, magni earum fuga labore.
              </p>
            </Col>
            <Col sm={1}></Col>
            <Col sm={6}>
              
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Customer;
