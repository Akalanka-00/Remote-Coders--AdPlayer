import './notification.scss'
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableNotification from "../../components/datatable/DatatableNotification"

const Notification = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="list">
      {/* Render the MenuIcon regardless of the sidebar visibility */}
      <div className="toggleSidebar" onClick={handleSidebarToggle}>
        {isSidebarVisible ? (
          <CloseIcon className="sandwitch" />
        ) : (
          <MenuIcon className="sandwitch" />
        )}
      </div>
      {isSidebarVisible && <Sidebar />}
      <div className={`listContainer ${isSidebarVisible ? "withSidebar" : ""}`}>
        <Navbar />
        <div className="adsContainer">
          <DatatableNotification />
        </div>
      </div>
    </div>
  );
}

export default Notification