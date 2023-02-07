import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { db } from "../../Services/firebase-config";

import PopularGames from "./PopularGames";

import "./GameDeveloper.css";
import "./DeveloperDetails.css"

import PIC1 from "../../Assets/Slides/pic1.jpg";


function DeveloperDetails({ data }) {
  return <div className="developer-detail-container">
    <div className="developer-title">
      <h3>{data.title}</h3>
    </div>
    <div className="developer-des">
      <font>{data.description}</font>
    </div>
  </div>
}




function GameDeveloper() {
  const dataList = [
    { title: "Over 1M+", description: "Game Developers are connected" },
    { title: "Over 1M+", description: "Game Developers are connected" },
  ];


  return (
    <section className="developer-container" id="devoloper">
      <div className="heading">
        <div className="title">
          <h1>Growth your apps with us</h1>
        </div>
      </div>
      <div className="devoloper-content">
        <Container>
          <Row>
            <Col sm={4}>
              {dataList.map((data,index)=>(
                <div key={index}>
                <DeveloperDetails  data={data} />
              </div>
              ))}
            </Col>
            <Col sm={1}></Col>
            <Col sm={6}>
              <div className="developer-picture-container">
                <img className="developer-picture" src={PIC1}/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <PopularGames/>
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

export default GameDeveloper;
