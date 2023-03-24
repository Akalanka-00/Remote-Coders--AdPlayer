import { db } from "../../Custfirebase.config"
import React,{useEffect,useState}from "react";
import './dashboardCss.css'
import { PieChart, Pie,Line,LineChart, Sector, ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { Routes,Route,NavLink,BrowserRouter } from 'react-router-dom';
import { doc,onSnapshot, collection,query,orderBy,limit} from "firebase/firestore";
import { Button } from "@mui/material";
//import Sidebar from "../Component/Sidebar";
import TemporaryDrawer from "../navbar/sidebar";
function Dashboard(){

  const [Addata, setAdData] = useState([]);
  const AdCollectionRef = collection(db,"AdData_Collection");
  const q= query(AdCollectionRef,orderBy("AdViewCount"),limit(1));
  const dataset1 = [
    { name: 'OngoingAds', value: 5 },
    { name: 'RejectedAds', value: 2 },
    { name: 'PendingAds', value: 2 },
  ];
  useEffect(() => {
    onSnapshot(AdCollectionRef,snapshot => {
        setAdData(snapshot.docs.map(doc => {
            return {
                id: doc.id,
                viewing: false,
                ...doc.data()   //breaking individual fields
            }
        }))
      })
}, [])
  const dataset2 = Addata.map((item) => ({
     name: item.Adname,
     Adview:item.AdViewCount }));

  //   const maxAdview = Math.max(...dataset2.map((item) => item.Adview)); // calculate max ad view count here
  //const maxAdview = Math.max.apply(null, dataset2.map(item => item.Adview));
 
     const data = [
    {"name": "1/March","uv": 4000,"pv": 2400,"amt": 2400},
    {"name": "2/March","uv": 3000,"pv": 1398,"amt": 2210},
    {"name": "3/March", "uv": 2000,"pv": 9800,"amt": 2290},
    {"name": "4/March","uv": 2780,"pv": 3908,"amt": 2000},
    {"name": "5/March","uv": 1890,"pv": 4800,"amt": 2181},
    {"name": "6/March","uv": 2390,"pv": 3800,"amt": 2500},
    {"name": "7/March","uv": 3490,"pv": 4300,"amt": 2100},
    {"name": "1/March","uv": 4000,"pv": 2400,"amt": 2400},
    {"name": "2/March","uv": 3000,"pv": 1398,"amt": 2210},
    {"name": "3/March", "uv": 2000,"pv": 9800,"amt": 2290},
    {"name": "4/March","uv": 2780,"pv": 3908,"amt": 2000},
    {"name": "5/March","uv": 1890,"pv": 4800,"amt": 2181},
    {"name": "6/March","uv": 2390,"pv": 3800,"amt": 2500},
    {"name": "7/March","uv": 3490,"pv": 4300,"amt": 2100}
  ]
  
  const colors = ['#8884d8', '#82ca9d', '#ffc658'];
  return (
    <div className="App">
   
     <div style={{display:"flex"}}>
      <div className="box">
       <div> <h3 style={{fontFamily: "Arial", fontSize: "16px", fontWeight: "bold",paddingTop:'0px',marginTop:"48px",marginLeft:'20px'}}>Total Ad Count</h3></div>
       {/* <h3 className="profiledatatitle">Weekly Ad Overview</h3>*/}
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataset1}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#008ac5"
              dataKey="value"
              nameKey="name"
            />
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="black" >
             Total 9 Ads
            </text>
      </PieChart>
        </ResponsiveContainer>
       
        <div style={{marginLeft:"30px",marginBottom:"40px"}}>
        <Button variant="contained" style={{ padding:"0px 30px" }}><nav><NavLink to="/ViewAd">More Info</NavLink></nav></Button>
        </div>
      </div>
      <div className="box2">
      <div><h3 style={{fontFamily: "Arial", fontSize: "16px", fontWeight: "bold",marginLeft:"20px"}}>Ad View Count</h3></div>  
        <ResponsiveContainer width="100%" height={325}>
          <BarChart data={dataset2} width={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0,25]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Adview" fill="#008ac5" barSize={45}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
      <div className="box3">
        <div><h3 style={{fontFamily: "Arial", fontSize: "16px", fontWeight: "bold",marginLeft:"20px",marginTop:"20px",paddingTop:"25px"}}>Monthly Performance</h3></div>
    <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart></div>
    </div>
  );
}

export default Dashboard;
