import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GamesIcon from '@mui/icons-material/Games';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";
import "./sidebar.scss"
const Sidebar=()=>{
 return(
    <div className="sidebar">
   <div className="top">
    <span className="logo">Voasiz</span>
    </div>
    <hr/>
   <div className="center">
    <ul>
      <Link to="/Home" style={{textDecoration:"none"}}>
      <li> <DashboardIcon/><span>Dashboard</span></li>
       </Link>
      <Link to="/ProfilePage" style={{textDecoration:"none"}}>
        <li> <AccountCircleIcon/><span>Profile</span></li>
        </Link>
        <Link to="/AdViewPage" style={{textDecoration:"none"}}>
        <li> <GamesIcon/><span>View Ads</span></li>
        </Link>
        <Link to="/GameViewPage" style={{textDecoration:"none"}}>
        <li> <GamesIcon/><span>View Games</span></li>
        </Link>
        <Link to="/PublishAd" style={{textDecoration:"none"}}>
        <li> <BarChartIcon/><span>Publish Ad</span></li>
        </Link>
        <li> <DashboardIcon/><span>Notifications</span></li>
    </ul>
    </div>
    <div className="bottom">
<div className="colorOption"></div>
<div className="colorOption"></div>
    </div>
    </div>
 )   
}
export default Sidebar;