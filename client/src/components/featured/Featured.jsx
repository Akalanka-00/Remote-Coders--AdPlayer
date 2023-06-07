import React from "react";
import "./featured.scss"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured=()=>{
 return(
    <div className="featured">
      <div className="top">
         <h1 className="title">
            Total Advertisements
         </h1>
      </div>
      <div className="bottom">
         <div className="featuredChart">
<CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
         </div>
         <p className="title">Your Ongoing Advertisement rate</p>
      </div>
    </div>
 )   
}
export default Featured;