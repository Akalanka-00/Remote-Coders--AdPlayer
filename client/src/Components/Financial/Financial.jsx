import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./Financial.css";
import GameDeveloperFinancialDetails from "./GameDeveloperFinancialDetails/GameDeveloperFinancialDetails";

const Financial = () => {

  return (
    <div className="financial-container">
      <Accordion defaultActiveKey="0" flush>

        <Accordion.Item eventKey="0">
          <Accordion.Header>Game Developer App revenue</Accordion.Header>

          <Accordion.Body>
          <GameDeveloperFinancialDetails />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Game Developer widthrowals</Accordion.Header>
          <Accordion.Body>
          <GameDeveloperFinancialDetails />

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Financial;
