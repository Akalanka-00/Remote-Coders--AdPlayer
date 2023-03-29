import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import { db } from "../../../Services/firebase-config";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  WhereFilterOp,
  query,
  where,
} from "firebase/firestore";

const GameDeveloperFinancialDetails = () => {
  const [developerInfo, setDeveloperInfo] = useState([]);
  const [gameInfo, setGameInfo] = useState([]);
  const [adUnitInfo, setAdUnitInfo] = useState([]);

  const [filtered_data_item, set_filtered_data_item] = useState({
    developer_id: "",
    developer_username: "",
    developer_email: "",
    available_games: "",
    available_ad_units: 0,
    total_view_count: 0,
    // total_revenue:0
  });
  const [filteredData, setFilteredData] = useState([]);

  //Data retrieve functions
  function getAdUnitInfo() {
    const adUnitInfoRef = collection(db, "AdUnitCollection");

    onSnapshot(adUnitInfoRef, (snapshot) => {
      setAdUnitInfo(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ad_req: getTotalReq(doc.data().no_of_req_ad_daily),
          };
        })
      );
    });

    return;
  }

  function getGamesInfo() {
    const gameInfoRef = query(
      collection(db, "GamesCollection")
      // where("ad_units", "array-contains", ad_unit_id)
    );

    onSnapshot(gameInfoRef, (snapshot) => {
      setGameInfo(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().game_name,
            ad_unit_list: doc.data().ad_units,
          };
        })
      );
    });
  }

  function getDeveloperInfo() {
    const developerInfoRef = collection(db, "DeveloperCollection");
    onSnapshot(developerInfoRef, (snapshot) => {
      setDeveloperInfo(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            username: doc.data().fname + " " + doc.data().lname,
            email: doc.data().email,
            available_games: doc.data().games,
            profile: doc.data().profile,
          };
        })
      );
    });
  }

  function getTotalReq(arr) {
    var tot = 0;
    const view_count_values = arr.map((activity) => activity.view_count);
    view_count_values.forEach((daily_count) => {
      tot = tot + daily_count;
    });
    return tot;
  }

  useEffect(() => {
    getDeveloperInfo();
    getGamesInfo();
    getAdUnitInfo();
  }, []);

  function get_ad_unit_view_count(ad_unit_list) {

    var viewcount=0;
    ad_unit_list.forEach((ad_unit_id)=>{
      adUnitInfo.forEach((ad_unit)=>{
        if(ad_unit_id==ad_unit.id){
          console.log("Selected ad unit is "+ad_unit.id);
          viewcount = viewcount + ad_unit.ad_req;
        }
      })
    })
    return viewcount;
  }
  function get_game_view_count(game_list) {
    var viewcount = 0;
    game_list.forEach((selected_game) => {
      gameInfo.forEach((available_games) => {
        if (selected_game === available_games.id) {
          console.log("available " + selected_game);
          viewcount =
            viewcount + get_ad_unit_view_count(available_games.ad_unit_list);
        }
      });
    });
    console.log("view count is "+ viewcount)
  }
  function handleData() {
    developerInfo.map((developer) => {
      const game_view_count = get_game_view_count(developer.available_games);
      const no_of_games = developer.available_games.length;

      console.log("no of games "+no_of_games);
      // set_filtered_data_item({
      //   ...filtered_data_item,
      //   developer_id: developer.id,
      //   developer_email: developer.email,
      //   developer_username: developer.username,
      // });
      const developer_id= developer.id;
      const developer_email = developer.email;
      const developer_username = developer.username;
    });
  }

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default GameDeveloperFinancialDetails;
