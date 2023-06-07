import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../../imgs/profile.jpg";
import { db } from "../../firebase.config";
import { collection, onSnapshot } from "firebase/firestore";

const Navbar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const [ComplainCollection, setComp] = useState([]);
  const complainCollectionRef = collection(db, "ComplainCollection");
  const [Notcount, setNotCount] = useState(0);

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

  return (
    <div className="navibar">
      <div className="wrapper">
        <h2 className="welcome">  </h2>
        <div className="items">
          <div className="item">
            {darkMode ? (
              <LightModeIcon
                className="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: "TOGGLE" });
                }}
              />
            ) : (
              <DarkModeOutlinedIcon
                className="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: "TOGGLE" });
                }}
              />
            )}
          </div>
          <Link
            to="/Notifications"
            style={{ textDecoration: "none", color: "none" }}
          >
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">{Notcount}</div>
            </div>
          </Link>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="iconchat" />
            <div className="counter">10</div>
          </div>
          <Link to="/Single" style={{ textDecoration: "none" }}>
            <div className="item">
              <img src={profile} alt="" className="avatar" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
