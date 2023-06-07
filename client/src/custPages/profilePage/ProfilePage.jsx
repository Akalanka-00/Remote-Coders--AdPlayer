import React from "react";
import "./profilePage.scss";
import { useEffect, useState } from 'react';
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore"
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import { Table, TableBody, TableRow, TableCell,Button } from '@mui/material';
import Chart from "../../components/chart/Chart";
import { Link } from "react-router-dom";
const ProfilePage=()=>{

   const [user, setUser] = useState({});
   const [userId, setUserId] = useState(null);

   useEffect(() => {
      try {
        const loggedInUserId = getLoggedInUserId();
        setUserId(loggedInUserId);
      } catch (error) {
        console.log(error);
      }
    }, []);
    

    useEffect(() => {
      try{
        if (userId) {
          const ProfileCollectionRef = doc(db, "CustomerCollection", userId);
          onSnapshot(ProfileCollectionRef, (doc) => {
            setUser(doc.data());
          });
        }
      }catch(error){
        console.log(error)
      }
     
    }, [userId]);


 return(
    <div className="profile">
        <Sidebar/>
       <div className="profileContainer">
        <Navbar/>
<div className="top">
   <div className="left">
   <Link to="/EditProfile" style={{textDecoration:"none"}}>
   <div className="editButton">Edit</div>
    </Link>
      
   <h1 className="title">User Info</h1>
   <div className="item">
<img
src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
alt=""
className="ItemImg"/>
<div className="details">
<Table>
  <TableBody>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>First Name:</TableCell>
      <TableCell className="profileboxdetail">{user.fname}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>Last Name:</TableCell>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>{user.lname}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>CustomerID:</TableCell>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>{user.userId}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>Country:</TableCell>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>{user.country}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>Email Address:</TableCell>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>{user.email}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>Contacts:</TableCell>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>{user.contactNumber}</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
   </div>
   </div>
   <div className="right">
      <Chart/>
   </div>
</div>
<div className="bottom"></div>
       </div>
    </div>
 )   
}

function getLoggedInUserId() {
   // Return the user ID of the logged-in user
  
   return "73MpbSe1Vr9QiXIoWCQ2";
 }
export default ProfilePage;