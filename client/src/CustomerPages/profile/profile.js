import { db } from "../../Custfirebase.config"
import { useEffect, useState } from 'react';
import './profile.css'
import { doc, onSnapshot } from "firebase/firestore"
import { Routes,Route,NavLink,BrowserRouter } from 'react-router-dom';
import Editprofile from "./editprofile";
import { PieChart, Pie, Sector, ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { Table, TableBody, TableRow, TableCell,Button } from '@mui/material';
function Profile(){
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState(null);
    const dataset2 = [
      {name: 'Ad1',Adview:'40'},
      {name: 'Ad2',Adview:'30'},
      {name: 'Ad3',Adview:'60'},
      {name: 'Ad4',Adview:'25'},
      {name: 'Ad5',Adview:'65'},
      {name: 'Ad6',Adview:'5'},
    ];
    useEffect(() => {
      // Get the logged-in user ID
      const loggedInUserId = getLoggedInUserId();
      setUserId(loggedInUserId);
    }, []);

    useEffect(() => {
      if (userId) {
        const ProfileCollectionRef = doc(db, "customerCreateAccount", userId);
        onSnapshot(ProfileCollectionRef, (doc) => {
          setUser(doc.data());
        });
      }
    }, [userId]);

    return(
    
  <div className="App">
    <div className="Profilebox">
        <div className="propic">
          <h3 style={{fontFamily: "Arial", fontSize: "16px",fontWeight:"bold"}}>Profile Details</h3>
        <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"  alt="profile Picture" width="150px" height="150px" style={{marginLeft: "1px",padding:"20px",borderRadius:"30px"}}></img> 
        <div style={{ marginTop:"20px",marginLeft:"8px"}}>
        <Button variant="contained" style={{ padding:"0px 30px" }}><nav><NavLink to="/Editprofile">Edit Profile</NavLink></nav></Button>
        </div>
        </div>
        <div className="prodetail">
        <Table>
  <TableBody>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>First Name:</TableCell>
      <TableCell className="profileboxdetail">{user.FirstName}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>Last Name:</TableCell>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>{user.LastName}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>CustomerID:</TableCell>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>{user.Id}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>Country:</TableCell>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>{user.Country}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>Email Address:</TableCell>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>{user.EmailAddress}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>Contacts:</TableCell>
      <TableCell style={{fontFamily: "Arial", fontSize: "14px"}}>{user.ContactNumber}</TableCell>
    </TableRow>
  {/* <TableRow>
    <TableCell>Joined Since:</TableCell>
    <TableCell></TableCell>
  </TableRow> */}
  </TableBody>
</Table>
        </div>
   </div>
   <div style={{display:"flex"}}>
  <div className="Profilebox2">
    <h3 style={{padding:"10px"}}>Monthly Ad View Count</h3>
     <ResponsiveContainer width="100%" height={325}>
        <BarChart data={dataset2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Adview" fill="#8884d8" />
          </BarChart>
    </ResponsiveContainer>
  </div>
  <div className="Profilebox3">
    <h3 style={{padding:"10px"}}>Monthly Ad View Count</h3>
     <ResponsiveContainer width="100%" height={325}>
        <BarChart data={dataset2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Adview" fill="#8884d8" />
          </BarChart>
    </ResponsiveContainer>
  </div>
  </div>
  </div>

    );
}

function getLoggedInUserId() {
  // Return the user ID of the logged-in user
 
  return "J7fvkkKWPfEzMA76FvQQ";
}

export default Profile;
