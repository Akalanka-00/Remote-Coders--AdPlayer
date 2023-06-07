import Sidebar from "../../components/sidebar/Sidebar";
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="home">
      {/* Render the MenuIcon regardless of the sidebar visibility */}
      <div className="toggleSidebar" onClick={handleSidebarToggle}>
        {isSidebarVisible ? (
          <CloseIcon className="sandwitch" />
        ) : (
          <MenuIcon className="sandwitch" />
        )}
      </div>
      {isSidebarVisible && <Sidebar />}
      <div className={`homeContainer ${isSidebarVisible ? "withSidebar" : ""}`}>
        <Navbar />
        <div className="adsContainer">
        <div className="widgets">
          <Widget />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="View Count Data (Last 6 Months)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Admin Details</div>
          <Table />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
