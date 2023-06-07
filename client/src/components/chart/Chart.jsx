import React,{useEffect,useState} from "react";
import "./chart.scss"
import { db } from "../../firebase";
import {onSnapshot, collection} from "firebase/firestore";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const Chart=()=>{
   const [Addata, setAdData] = useState([]);
   const AdCollectionRef = collection(db,"AdvertisementCollection");
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
  }, []);
   const dataset2 = Addata.map((item) => ({
      name: item.name,
      Adview:item.target_view_count }));

    
 return(
    <div className="chart">
  <div className="title">
   <div className="barchart">
      <div>
   <h3 className="topic" style={{marginTop:"20px"}}>Ad View Count</h3></div>  
        <ResponsiveContainer width="100%" height={325}>
          <BarChart data={dataset2} width={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Adname" />
            <YAxis domain={[0,25]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Adview" fill="#008ac5" barSize={45}/>
          </BarChart>
        </ResponsiveContainer>
   </div>
  </div>
  </div>
 )   
}
export default Chart;