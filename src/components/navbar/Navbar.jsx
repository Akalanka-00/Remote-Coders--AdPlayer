import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import profile from "../../imgs/profile.jpg"

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <h2 className="welcome">Hello Admin</h2>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <Link to="/Notifications" style={{ textDecoration: "none" ,color: "none" }}>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">1</div>
            </div>
          </Link>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="iconchat" />
            <div className="counter">2</div>
          </div>
          <Link to="/Single" style={{ textDecoration: "none" }}>
            <div className="item">
              <img
                src={profile}
                alt=""
                className="avatar"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
