import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">AdPlayer</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Admins</span>
            </li>
          </Link>
          <Link to="/games" style={{ textDecoration: "none" }}>
            <li>
              <SportsVolleyballIcon className="icon" />
              <span>Games</span>
            </li>
          </Link>
          <Link to="/Notifications" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsActiveIcon className="icon" />
              <span>Notifications</span>
            </li>
          </Link>
          <Link to="/Ads" style={{ textDecoration: "none" }}>
            <li>
              <BurstModeIcon className="icon" />
              <span>Advertisments</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/Stats" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Financial Stats</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/Logs" style={{ textDecoration: "none" }}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          </Link>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Help</span>
          </li>
          <p className="title">USER</p>
          <Link to="/Single" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          <p className="title">THEME</p>
          <li>
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
            <span
              onClick={(e) => {
                e.stopPropagation(); // prevent event bubbling
                dispatch({ type: "TOGGLE" });
              }}
            >
              {darkMode ? "Light" : "Dark"} mode switcher
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
