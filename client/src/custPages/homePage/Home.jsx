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
<Widgets type="advertisemnet"/>
<Widgets type="game"/>
<Widgets type="summary"/>
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