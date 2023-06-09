import React from "react";
import "./navbar.scss"
import {NotificationAdd, SearchOutlined } from "@mui/icons-material";
import Person3Icon from '@mui/icons-material/Person3';
import { Link } from "react-router-dom";
const Navbar=()=>{
 return(
    <div className="navbar">
      <div className="wrapper">
        <div>
         
        </div>
      <div className="items">
      <Link to="/ProfilePage" style={{textDecoration:"none"}}>
      <div className="item">
                <Person3Icon/>
            </div>
        </Link>
            <div className="item">
                <NotificationAdd/>
            </div>
           
</div>
      </div>
    </div>
 )   
}
export default Navbar;