import { db } from "../../Custfirebase.config"
import { useEffect, useState } from 'react';
import './gamedetail.css'
import { doc,onSnapshot, collection, limit } from "firebase/firestore" 
import { orderBy,query } from "firebase/firestore";
import { Button } from "@mui/material";
import { Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
function GameDetail()
{
    const [data, setData] = useState([]);
    const[tgames,settgames]=useState([]);
    const gamesCollectionRef = collection(db,"GamesCollection");
    const q = query(gamesCollectionRef, orderBy("Rank"));
    const tg=query(gamesCollectionRef,orderBy("Rank"),limit(2));
    useEffect(() => {
        onSnapshot(q,snapshot => {
            setData(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()   //breaking individual fields
                }
            }))
          })
    }, [])
    useEffect(() => {
      onSnapshot(tg,snapshot => {
          settgames(snapshot.docs.map(doc => {
              return {
                  id: doc.id,
                  viewing: false,
                  ...doc.data()   //breaking individual fields
              }
          }))
        })
  }, [])
    return(
      <div className="App">
        
        <p><h1 style={{ color: "rgb(24, 144, 140)" }}>Pricing</h1></p>
        <div >
      <div className="GameDetailbox" style={{height:"800px"}}>
  <label><h3>All Games</h3></label>
  <Table>
  <TableHead>
    <TableRow>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Game Name</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Rank</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>View Count</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Ad Price</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
 
  {data.map((item, index) => (
      <TableRow key={item.id || index}>
        <TableCell style={{ padding: "10px" }}>{item.Name}</TableCell>
        <TableCell style={{ padding: "10px" }}>{item.Rank}</TableCell>
        <TableCell style={{ padding: "10px" }}>{item.View_count}</TableCell>
      </TableRow>
    ))}
      
      </TableBody>
      </Table>

</div>
<div className="GameDetailbox">
  <label><h3 className="Gametitle" >Trending Games</h3></label>
  <Table>
  <TableHead>
    <TableRow>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Game Name</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Rank</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>View Count</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Ad Price</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
 
  {tgames.map((item, index) => (
      <TableRow key={item.id || index}>
        <TableCell style={{ padding: "10px" }}>{item.Name}</TableCell>
        <TableCell style={{ padding: "10px" }}>{item.Rank}</TableCell>
        <TableCell style={{ padding: "10px" }}>{item.View_count}</TableCell>
      </TableRow>
    ))}
      
      </TableBody>
      </Table>
</div>
</div>
<div className="GameDetailbox" style={{marginLeft:'50px'}}>
  <label><h3 className="Gametitle">Multi Player Game</h3></label>
  <Table>
  <TableHead>
    <TableRow>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Game Name</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Rank</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>View Count</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Ad Price</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
 
  {data.map((item, index) => (
      <TableRow key={item.id || index}>
        <TableCell style={{ padding: "10px" }}>{item.Name}</TableCell>
        <TableCell style={{ padding: "10px" }}>{item.Rank}</TableCell>
        <TableCell style={{ padding: "10px" }}>{item.View_count}</TableCell>
      </TableRow>
    ))}
      
      </TableBody>
      </Table>
</div>
<div className="GameDetailbox" style={{margin:'10px'}}>
  <label><h3   className="Gametitle">Single Player Game</h3></label>
  <Table>
  <TableHead>
    <TableRow>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Game Name</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Rank</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>View Count</TableCell>
      <TableCell style={{ padding: "40px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Ad Price</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
 
  {data.map((item, index) => (
      <TableRow key={item.id || index}>
        <TableCell style={{ padding: "10px" }}>{item.Name}</TableCell>
        <TableCell style={{ padding: "10px" }}>{item.Rank}</TableCell>
        <TableCell style={{ padding: "10px" }}>{item.View_count}</TableCell>
      </TableRow>
    ))}
      
      </TableBody>
      </Table>
</div>

<div  style={{ marginTop:"10px",marginLeft:"980px"}}>
        <Button variant="contained" style={{ padding:"10px 30px" }}>Next Page</Button>
        </div>
</div>

    )
    }

export default GameDetail;