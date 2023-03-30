import { db } from "../../Custfirebase.config"
import React,{useEffect,useState}from "react";
import './dashboardCss.css'
import { PieChart, Pie,Line,LineChart, Sector, ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { Routes,Route,NavLink,BrowserRouter } from 'react-router-dom';
import { doc,onSnapshot, collection,query,orderBy,limit} from "firebase/firestore";
import { Button, Table, TableHead,TableCell,TableRow,TableBody } from "@mui/material";

function CustomTable({ title, data, columns }) {  //takes props
  return (
    <div>
      {/* Reusable Code for Column Header and Data */}
      <h3 className="heading">{title}</h3>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key} 
              style={{ padding: "3px", fontFamily: "Arial", fontSize: "12px",fontWeight: "bold" }} 
              scope="col">{column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id || index}>
              {columns.map((column) => (
                <TableCell key={column.key} style={{ padding: "5px", fontFamily: "Arial", fontSize: "12px" }}>
                  {item[column.key]}
                  </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </div>
  );
}


function Dashboard(){

  const [Addata, setAdData] = useState([]);
  const[trendingAd,setTrendingAdData]=useState([]);
  const[trendingGame,setTrendingGameData]=useState([]);
  const AdCollectionRef = collection(db,"AdData_Collection"); //A constant variable referance to the database collection
  const GameDataCollectionRef=collection(db,"GamesCollection");
  const q = query(AdCollectionRef, orderBy("AdViewCount", "desc"), limit(3)); //firebase query
  const tg=query(GameDataCollectionRef,orderBy("Rank"),limit(3)); 

  const dataset1 = [
    { name: 'OngoingAds', value: 5 },
    { name: 'RejectedAds', value: 2 },
    { name: 'PendingAds', value: 2 },
  ];

  useEffect(() => {
    try {
      onSnapshot(q, snapshot => {
        setTrendingAdData(snapshot.docs.map(doc => {
          return {
            id: doc.id,
            viewing: false,
            ...doc.data()   //breaking individual fields
          }
        }))
      })
    } catch (error) {
      console.error(error);
    }
  }, []);
  

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

useEffect(() => {
  try {
    onSnapshot(tg, snapshot => {
      setTrendingGameData(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data()   //breaking individual fields
        }
      }))
    })
  } catch (error) {
    console.error(error);
  }
}, []);

  const dataset2 = Addata.map((item) => ({
     name: item.Adname,
     Adview:item.AdViewCount }));

     const data = [
    {"name": "1/March","uv": 4000,"pv": 2400,"amt": 2400},
    {"name": "2/March","uv": 3000,"pv": 1398,"amt": 2210},
    {"name": "3/March", "uv": 2000,"pv": 9800,"amt": 2290},
    {"name": "4/March","uv": 2780,"pv": 3908,"amt": 2000},
   
  ]
   const colors = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
  <div className="App">
    <div style={{display:"flex"}}>
      <div className="smallbox">
        <CustomTable
                title="Your Top 3 Ads"
                data={trendingAd}
                columns={[{key:'Adname',label:'Advertisement Name'},]}/>
        <div>
          <Button style={{fontSize:'10px',backgroundColor:"rgb(0, 138, 197)",marginLeft:"160px",marginTop:"3px" }}>
            <NavLink to='/Profile'>MoreInfo</NavLink>
          </Button>
        </div>
     </div>
    <div className="smallbox">
         <CustomTable
                title="Top 3 Games Today"
                data={trendingGame}
                columns={[{ key:'Name', label:'Game Name'},]}/>
           <div>
          <Button style={{ fontSize:'10px',backgroundColor:"rgb(0, 138, 197)",font:"white",marginLeft:"160px",marginTop:"3px" }}><NavLink to='/Tables'>MoreInfo</NavLink></Button>
        </div>
    </div>
      
    <div className="smallbox">
         <div> <h3 className="heading">Your Ads</h3></div> 
      <div>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell style={{ padding: "3px", fontFamily: "Arial", fontSize: "12px", fontWeight: "bold" }}>Summary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
 
 
 <TableRow><TableCell style={{ padding: "5px", fontFamily: "Arial", fontSize: "10px"}}>On Going Ads</TableCell><TableCell style={{ padding: "3px", fontFamily: "Arial", fontSize: "10px", fontWeight: "bold" }}>5</TableCell> </TableRow>
 <TableRow><TableCell style={{ padding: "5px", fontFamily: "Arial", fontSize: "10px"}}>Pending Ads</TableCell><TableCell style={{ padding: "3px", fontFamily: "Arial", fontSize: "10px", fontWeight: "bold" }}>4</TableCell></TableRow>
 <TableRow><TableCell style={{ padding: "5px", fontFamily: "Arial", fontSize: "10px"}}>Rejected Ads</TableCell><TableCell style={{ padding: "3px", fontFamily: "Arial", fontSize: "10px", fontWeight: "bold" }}>1</TableCell></TableRow>
      
      </TableBody>
        </Table>
        <div>
          <Button style={{ fontSize:'10px',backgroundColor:"rgb(0, 138, 197)",color:"white",marginLeft:"160px",marginTop:"10px" }}>
            <NavLink to='/viewAd'>MoreInfo</NavLink>
          </Button>
        </div>
      </div> 
</div>
<div className="smallbox">
  <div><h2 style={{padding: "3px", fontFamily: "Arial", fontSize: "20px", fontWeight: "bold"}} >354 New Ads Today From All over the World!!!</h2></div>
  <div>
  <Button style={{ fontSize:'11px',backgroundColor:"rgb(0, 138, 197)",color:"white",margin:"40px",marginTop:"35px" }}>
    <NavLink to='/Form'>Publish Your Ad</NavLink>
  </Button>
  </div>
</div>
      </div>

       <div style={{display:"flex"}}>
      
      <div className="box">
       <div> <h3 className="topic">Total Ad Count</h3></div>
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
        <Button variant="contained" style={{ padding:"0px 30px" }}>
          <nav><NavLink to="/ViewAd">More Info</NavLink></nav>
        </Button>
        </div>
      </div>
      <div className="box2">
      <div><h3 className="topic" style={{marginTop:"20px"}}>Ad View Count</h3></div>  
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
        <div><h3 className="topic">Monthly Performance</h3></div>
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
