import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import "./PopularGames.css"
function PopularGames({ gameDataList }) {
  return (
    <ListGroup as="ol" numbered>
      {gameDataList.map((gameData, index) => (
         
        <div key={index}>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{gameData.title}</div>
            </div>
            <img className="pop-img" src={gameData.path} />
          </ListGroup.Item>
        </div>
      ))}
    </ListGroup>
  );
}

export default PopularGames;
