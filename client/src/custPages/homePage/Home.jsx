import React from "react";
import "./home.scss"
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Widgets from "../../components/widgets/widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
const Home=()=>{
 return(
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
      <Navbar/>
      <div className="widget">
      <Widgets title="Top Ads" widgettype="adcollection" />
      <Widgets title="Top Games" link="More Info" widgettype="gamecollection" />
      <Widgets title="Summary of Ads" link="More Info" />
<Widgets/>
      </div>
      <div className="charts">
        <Featured/>
        <Chart/>
      </div>
      </div>
   
    </div>
 )   
}
export default Home;