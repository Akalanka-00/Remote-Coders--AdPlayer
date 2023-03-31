import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { db } from "../../../Services/firebase-config";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";


import "./GameDeveloper.css";
import "./DeveloperDetails.css";

import PIC1 from "../../../Assets/Slides/pic1.jpg";
import { collection, onSnapshot } from "firebase/firestore";

function DeveloperDetails({ data }) {
  return (
    <div className="developer-detail-container">
      <div className="developer-title">
        <h3>{data.title}</h3>
      </div>
      <div className="developer-des">
        <font>{data.description}</font>
      </div>
    </div>
  );
}

const GameDeveloper = () => {
  const [gameDetails, setGameDetails] = useState([]);

  const gameDataCollectionRef = collection(db, "GamesCollection");

  useEffect(() => {
    onSnapshot(gameDataCollectionRef, (snapshot) => {
      
      setGameDetails(
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

  const dataList = [
    { title: "Over 1M+", description: "Game Developers are connected" },
    { title: "Over 1M+", description: "Game Developers are connected" },
  ];

  const numAscending = [...gameDetails].sort((a, b) => a.rank - b.rank);
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
              {dataList.map((data, index) => (
                <div key={index}>
                  <DeveloperDetails data={data} />
                </div>
              ))}
            </Col>
            <Col sm={1}></Col>
            <Col sm={6}>
              <div className="developer-picture-container">
                <img className="developer-picture" src={PIC1} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="pop-title">Most Popular Games</div>
              <ListGroup as="ol" numbered>
                {numAscending.map(
                  (gameData, i) => (
                    console.log(gameData),
                    (
                      <div key={gameData.rank}>
                        {i < 3 ? (
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                          >
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">{gameData.rank}</div>
                              {gameData.game_name}
                            </div>
                            <img
                              className="pop-img"
                              rounded
                              src={gameData.thumb}
                            />
                          </ListGroup.Item>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    )
                  )
                )}
              </ListGroup>
            </Col>
            <Col sm={6}></Col>
            <Col sm={2}>
              <Button
                href="GameDeveloperSignUp"
                className="getStartedBtn"
                variant="primary"
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default GameDeveloper;
