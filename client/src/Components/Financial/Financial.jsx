import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { db } from "../../Services/firebase-config"
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  WhereFilterOp,
} from "firebase/firestore";

import "./Financial.css";
import GameDeveloperFinancialDetails from "./GameDeveloperFinancialDetails/GameDeveloperFinancialDetails";

const Financial = () => {

  const [developerInfo, setDeveloperInfo] = useState([]);
  const [gameInfo, setGameInfo]= useState([]);
  const [adUnitInfo, setAdUnitInfo] = useState([]);
  const [filteredData, setFilteredData] = useState([])

  function getData(){
    const developerInfoRef = collection(db, "DeveloperCollection");
    const gameInfoRef = collection(db, "GamesCollection");
    const adUnitInfoRef = collection(db, "AdUnitCollection");


    onSnapshot(developerInfoRef, (snapshot) => {
      setDeveloperInfo(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
    });

    onSnapshot(gameInfoRef, (snapshot) => {
      setGameInfo(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
    });

    onSnapshot(adUnitInfoRef, (snapshot) => {
      setAdUnitInfo(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
    });

    return
  }

  function getMax(arr){
    var max = arr[0];
    arr.forEach((item)=>{
      if(item>max)
      max = item;
    })

    return max;
  }

  function displayData(){
    console.log("----------------developerInfo----------------")
    developerInfo.forEach((element)=>console.log(element))

    console.log("----------------gameInfo----------------")
    gameInfo.forEach((element)=>console.log(element))

    console.log("----------------adUnitInfo----------------")
    adUnitInfo.forEach((element)=>console.log(element))
  }
  useEffect(()=>{
    getData();
   
  }, [])

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  function sort_adUnits(){

    //sort the adunits according to max income 
   // adUnitInfo
    //getMax(adUnitInfo)
    return adUnitInfo;
  }

  function analizeData(){
    
    console.log(sort_adUnits())
    developerInfo.map((dev)=>{
      setFilteredData([{ ...filteredData, ad_unit_id:dev.id, username: dev.fname + " " + dev.lname }])
    })
    console.log(filteredData)
  }
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
                { analizeData()}
                <GameDeveloperFinancialDetails/>
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
          <Accordion.Body>
            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Financial;
