import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { db } from "../../Services/firebase-config";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  WhereFilterOp,
  query,
  where,
} from "firebase/firestore";

import "./Financial.css";

import "./Financial.css";
import GameDeveloperFinancialDetails from "./GameDeveloperFinancialDetails/GameDeveloperFinancialDetails";

const Financial = () => {

  return (
    <div className="financial-container">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Game Developer Financial Details</Accordion.Header>
          <Accordion.Body>
            <Tabs
              defaultActiveKey="profile"
              id="earning-tabs"
              className="mb-3"
              fill
            >
              <Tab eventKey="daily" title="Daily">
                <GameDeveloperFinancialDetails />
              </Tab>
              <Tab eventKey="monthly" title="Monthly">
                {/* <Sonnet /> */}
              </Tab>
              <Tab eventKey="yearly" title="Yearly">
                {/* <Sonnet /> */}
              </Tab>
            </Tabs>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Payments</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Financial;
