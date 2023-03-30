import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import { db } from "../../firebase.config";
import { React, useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";


const Widget = () => {
  const [GamesCollection, setGames] = useState([]);
  const [subadmin, setAdmins] = useState([]);
  const [AdData_Collection, setAds] = useState([]);
  const [ComplainCollection, setComp] = useState([]);
  const gamesCollectionRef = collection(db, "GamesCollection");
  const setAdminsRef = collection(db, "subadmin");
  const adData_CollectionRef = collection(db, "AdData_Collection");
  const complainCollectionRef = collection(db, "ComplainCollection");



  return (
    <>
      <div className="widget">
        <div className="left">
          <span className="title">ADMINS</span>
          <span className="counter">Number of Admins: 6</span>
          <span className="link">
            <Link to="/users" style={{ textDecoration: "none", color: "grey" }}>
              See all users
            </Link>
          </span>
        </div>
        <div className="right">
          <PersonOutlinedIcon className="iconAdmin" />
        </div>
      </div>

      <div className="widget">
        <div className="left">
          <span className="title">ADVERTISMENTS</span>
          <span className="counter">Pending advertisments: 3</span>
          <span className="link">
            <Link to="/Ads" style={{ textDecoration: "none", color: "grey" }}>
              View pending ads
            </Link>
          </span>
        </div>
        <div className="right">
          <BurstModeIcon className="iconAds" />
        </div>
      </div>

      <div className="widget">
        <div className="left">
          <span className="title">NOTIFICATIONS</span>
          <span className="counter">Unreade nitifications: 2</span>
          <span className="link">
            <Link
              to="/Notifications"
              style={{ textDecoration: "none", color: "grey" }}
            >
              View notifications
            </Link>
          </span>
        </div>
        <div className="right">
          <NotificationsActiveIcon className="iconNotification" />
        </div>
      </div>

      <div className="widget">
        <div className="left">
          <span className="title">GAMES</span>
          <span className="counter">Total games: 3</span>
          <span className="link">
            <Link to="/games" style={{ textDecoration: "none", color: "grey" }}>
              See game details
            </Link>
          </span>
        </div>
        <div className="right">
          <SportsVolleyballIcon className="iconGames" />
        </div>
      </div>
    </>
  );
};

export default Widget;
