import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import { db } from "../../firebase.config";
import { React, useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

const Widget = () => {
  const [subadmin, setAdmins] = useState([]);
  const setAdminsRef = collection(db, "subadmin");
  const adData_CollectionRef = collection(db, "AdData_Collection");
  const [AdData_Collection, setAds] = useState([]);
  const [Admincount, setAdminCount] = useState(0);
  const [Adscount, setAdCount] = useState(0);
  const [ComplainCollection, setComp] = useState([]);
  const complainCollectionRef = collection(db, "ComplainCollection");
  const [Notcount, setNotCount] = useState(0);
  const [GamesCollection, setGames] = useState([]);
  const gamesCollectionRef = collection(db, "GamesCollection");
  const [Gamescount, setGamesCount] = useState(0);

  //admin
  useEffect(() => {
    onSnapshot(setAdminsRef, (snapshot) => {
      setAdmins(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
      setAdminCount(snapshot.size);
    });
  }, []);

  //ads
  const q = query(adData_CollectionRef, where("Status", "==", "Pending"));
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setAds(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
      setAdCount(snapshot.size);
    });
  }, []);

  //notification
  useEffect(() => {
    onSnapshot(complainCollectionRef, (snapshot) => {
        setComp(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
      setNotCount(snapshot.size);
    });
  }, []);

  //games
  useEffect(() => {
    onSnapshot(gamesCollectionRef, (snapshot) => {
      setGames(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
      setGamesCount(snapshot.size);
    });
  }, []);


  return (
    <>
      <div className="widget">
        <div className="left">
          <span className="title">ADMINS</span>
          <span className="counter">Number of Admins: {Admincount}</span>
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
          <span className="counter">Pending advertisments: {Adscount}</span>
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
          <span className="counter">Unreade nitifications: {Notcount}</span>
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
          <span className="counter">Total games: {Gamescount}</span>
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
