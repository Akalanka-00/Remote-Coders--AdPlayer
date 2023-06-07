import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import "./gameViewPage.scss"
import Gametable from "../../components/gametable/Gametable";
const GameViewPage=()=>{
 return(
    <div className="gameViewPage">
        <Sidebar/>
        <h1 className="title">
            <Navbar/>
            <div className="gametable">
            <Gametable/>
            </div>
           
        </h1>
       
    </div>
 )   
}
export default GameViewPage;