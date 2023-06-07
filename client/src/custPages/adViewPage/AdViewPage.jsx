import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import "./adViewPage.scss"
import Datatable from "../../components/datatable/Datatable";
const AdViewPage=()=>{
 return(
    <div className="adViewPage">
        <Sidebar/>
        <h1 className="title">
            <Navbar/>
            <div className="datatable">
            <Datatable/>
            </div>
           
        </h1>
       
    </div>
 )   
}
export default AdViewPage;