import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./Financial.css";
import GameDeveloperFinancialDetails from "./GameDeveloperFinancialDetails/GameDeveloperFinancialDetails";
// import CommonNavBar from "../CommonNavBar/CommonNavBar";
import GameDeveloperWithdrawal from "./GameDeveloperWithdrawal/GameDeveloperWithdrawal";
import CustomerIncome from "./CustomerIncome/CustomerIncome";

const Financial = () => {

  return (
    <div className="financial-container">
            {/* <CommonNavBar /> */}

      <Accordion defaultActiveKey="0" flush className="pt-5 mt-5">

        <Accordion.Item eventKey="0">
          <Accordion.Header>Game Developer App revenue</Accordion.Header>

          <Accordion.Body>
            {/* Game developer Financial Details */}
          <GameDeveloperFinancialDetails /> 
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Game Developer widthrowals</Accordion.Header>
          <Accordion.Body>
            {/* Game Developer widthrowals Details */}
          <GameDeveloperWithdrawal />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Customer Incomes</Accordion.Header>
          <Accordion.Body>
            {/* Customer Income Details */}
          <CustomerIncome />
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
};

export default Financial;
