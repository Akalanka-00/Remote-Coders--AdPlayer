import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import { db } from "../../firebase.config";
import { React, useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  const [GamesCollection, setGames] = useState([]);
  const [subadmin, setAdmins] = useState([]);
  const [AdData_Collection, setAds] = useState([]);
  const [ComplainCollection, setComp] = useState([]);
  const gamesCollectionRef = collection(db, "GamesCollection");
  const setAdminsRef = collection(db, "subadmin");
  const adData_CollectionRef = collection(db, "AdData_Collection");
  const complainCollectionRef = collection(db, "ComplainCollection");

  let data;

  //temporary
  const amount = 5;
  const diff = 20;
  const amounta = 4;

  switch (type) {
    case "user":
      data = {
        title: "ADMINS",
        link: "See all users",
        amount: amounta,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "ad":
      data = {
        title: "ADVERTISMENTS",
        link: "View pending ads",
        icon: (
          <BurstModeIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "notification":
      data = {
        title: "NOTIFICATIONS",
        link: "View notifications",
        icon: (
          <NotificationsActiveIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "games":
      data = {
        title: "GAMES",
        link: "See game details",
        icon: (
          <SportsVolleyballIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <>
      <div className="widget">
        <div className="left">
          <span className="title">ADMINS</span>
          <span className="counter">4</span>
          <span className="link">
            <Link to="/users" style={{ textDecoration: "none", color: "grey" }}>
              See all users
            </Link>
          </span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          <PersonOutlinedIcon className="iconAdmin" />
        </div>
      </div>

      <div className="widget">
        <div className="left">
          <span className="title">ADVERTISMENTS</span>
          <span className="counter">2</span>
          <span className="link">
            <Link to="/Ads" style={{ textDecoration: "none", color: "grey" }}>
              View pending ads
            </Link>
          </span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          <BurstModeIcon className="iconAds" />
        </div>
      </div>

      <div className="widget">
        <div className="left">
          <span className="title">NOTIFICATIONS</span>
          <span className="counter">2</span>
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
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          <NotificationsActiveIcon className="iconNotification" />
        </div>
      </div>

      <div className="widget">
        <div className="left">
          <span className="title">GAMES</span>
          <span className="counter">2</span>
          <span className="link">
            <Link to="/games" style={{ textDecoration: "none", color: "grey" }}>
              See game details
            </Link>
          </span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          <SportsVolleyballIcon className="iconGames" />
        </div>
      </div>
    </>
  );
};

export default Widget;
