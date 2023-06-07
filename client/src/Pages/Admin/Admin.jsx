import React, { useState } from "react";
import "./admin.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DatatableAdmin from "../../components/datatable/DatatableAdmin";

const Admin = () => {
<<<<<<< Updated upstream
  return (
    <div>
      
    </div>
  )
}
=======
  const [isSidebarVisible, setSidebarVisible] = useState(true);
>>>>>>> Stashed changes

  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="list">
      {/* Render the MenuIcon regardless of the sidebar visibility */}
      <div className="toggleSidebar" onClick={handleSidebarToggle}>
        {isSidebarVisible ? <CloseIcon className="sandwitch"/> : <MenuIcon className="sandwitch"/>}
      </div>
      {isSidebarVisible && <Sidebar />}
      <div className={`listContainer ${isSidebarVisible ? "withSidebar" : ""}`}>
        <Navbar />
        <div className="adsContainer">
          <DatatableAdmin />
        </div>
      </div>
    </div>
  );
};

export default Admin;
