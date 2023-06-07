import React,{useState,useEffect} from "react";
import { db } from "../../firebase";
import "./widgets.scss"
import { Button, Table, TableHead,TableCell,TableRow,TableBody } from "@mui/material";
import { doc,onSnapshot, collection,query,orderBy,limit} from "firebase/firestore";

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
  
const Widgets=({type})=>{
let data;
const [Addata, setAdData] = useState([]);
  const[trendingAd,setTrendingAdData]=useState([]);
  const[trendingGame,setTrendingGameData]=useState([]);

  const AdCollectionRef = collection(db,"AdData_Collection"); //A constant variable referance to the database collection
  const GameDataCollectionRef=collection(db,"GamesCollection");
  const q = query(AdCollectionRef, orderBy("View_count", "desc"), limit(3)); //firebase query
  const tg=query(GameDataCollectionRef,orderBy("Rank"),limit(3)); 
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

switch(type){
    case "advertisemnet":
    data={
        title:"Your Ads",
        link:"See All Ads"
    }
     break;
    case "game":
        data={
            title:"Top Games",
            link:"More Info"
        }
        break;
        case "summary":
            data={
                title:"Summary of Ads",
                link:"More Info"
            }   
            break;
            default:
                data = {
                    title: "",
                    link: ""};
            break;
}


 return(
    <div className="widgets">
        <div className="left">
            <span className="title">{data.title}</span>
            <CustomTable
            title="Your Top 3 Ads"
            data={trendingAd}
            columns={[{ key: 'Adname', label: 'Advertisement Name' }]}
          />
            <span className="link">{data.link}</span>
        </div>
        <div className="right">r</div>
   
    </div>
 )   
}
export default Widgets;