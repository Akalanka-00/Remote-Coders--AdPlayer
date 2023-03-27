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
  query,
  where,
} from "firebase/firestore";

import "./Financial.css";
import GameDeveloperFinancialDetails from "./GameDeveloperFinancialDetails/GameDeveloperFinancialDetails";

const Financial = () => {

  const [developerInfo, setDeveloperInfo] = useState([]);
  const [gameInfo, setGameInfo]= useState([]);
  const [adUnitInfo, setAdUnitInfo] = useState([]);
  const [filteredData, setFilteredData] = useState([])

  const [dev_id, setDev_id] = useState([]);
  const [dev_game_list, set_dev_game_list] = useState([]);


  function getGamesInfo(ad_unit_id){
    const gameInfoRef = query(collection(db, "GamesCollection"),where("ad_units", "array-contains", ad_unit_id));

    onSnapshot(gameInfoRef, (snapshot) => {
      setGameInfo(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ad_unit_id:ad_unit_id,
            name:doc.data().game_name,
            viewng: false,
            ...doc.data(),
          };
        })
      );
    });
  }
  function getAdUnitInfo(){
    const developerInfoRef = collection(db, "DeveloperCollection");
   
    const adUnitInfoRef = collection(db, "AdUnitCollection");

    onSnapshot(adUnitInfoRef, (snapshot) => {
      setAdUnitInfo(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            //...doc.data(),
            revenue: getTotalRevenue(doc.data().no_of_req_ad_daily),
          };
        })
      );
    });




    onSnapshot(developerInfoRef, (snapshot) => {
      setDeveloperInfo(
        snapshot.docs.map((doc) => {
          getGamesInfo(doc.id);
          //console.log(doc.id)
          return {
            id: doc.id,
            //viewng: false,
            username: doc.data().fname + " " +doc.data().lname,
           // ...doc.data(),
          };
        })
      );
    });

   
    

    return
  }

  function getTotalRevenue(arr){
    var tot =0;
    const revenueValues = arr.map(activity => activity.revenue);
    revenueValues.forEach((daily_revenue)=>{
     
      tot = tot + daily_revenue;
    })
    //console.log(revenueValues)
    return tot;
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
    getAdUnitInfo();
   
  }, [])

  function sort_adUnits(){

    //sort the adunits according to max income 
    return adUnitInfo;
  }

  function analizeData(){

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
