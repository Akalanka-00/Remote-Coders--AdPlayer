import React from 'react'
import { db } from "../../Custfirebase.config"
import { useEffect, useState } from 'react';
import { orderBy,query } from "firebase/firestore";
import { doc,onSnapshot, collection, limit } from "firebase/firestore" 
import './gamedetail.css'
import { Button } from "@mui/material";
import { Table, TableBody, TableCell, TableHead, TableRow,TableContainer,Paper} from '@mui/material';

function TableHeader() {
  return ( 
    <TableRow>
      <TableCell style={{ padding: "30px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Game Name</TableCell>
      <TableCell style={{ padding: "30px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Rank</TableCell>
      <TableCell style={{ padding: "30px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>View Count</TableCell>
    </TableRow>
  );
}

function MyTable({ filteredGame }) {
  return (
    <Table>
      <TableHead>
        <TableHeader />
      </TableHead>
      <TableBody>
        {filteredGame.map((item, index) => (
          <TableRow key={item.id || index}>
            <TableCell style={{ padding: "10px", paddingLeft: "40px" }}>{item.Name}</TableCell>
            <TableCell style={{ padding: "10px", paddingLeft: "40px" }}>{item.Rank}</TableCell>
            <TableCell style={{ padding: "10px", paddingLeft: "40px" }}>{item.View_count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const GameDetail=() =>{
const [data, setData] = useState([]);
const[tgames,settgames]=useState([]);
const gamesCollectionRef = collection(db,"GamesCollection");
const q = query(gamesCollectionRef, orderBy("Rank"));
const tg =query (gamesCollectionRef,orderBy("Rank"),limit(2));
const [AllGamesTable, setAllGamesTable] = useState(true);
const handleAllGamesTable = () => {
setAllGamesTable(true);
setTrendingGamesTable(false);
};
const [TrendingGamesTable, setTrendingGamesTable] = useState(false);
const handleTrendingGamesTable = () => {
  setTrendingGamesTable(true);
  setAllGamesTable(false);
};

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
    <div className='ListContainer'> 
    <div className='ListTitle'>Game Details</div>
    <div style={{ display: 'flex', justifyContent: 'space-between',margin:"20px"}}>
      <Button variant="contained"  onClick={handleAllGamesTable} >All Games</Button>
      <Button variant="contained"  onClick={handleTrendingGamesTable}>Trending Games</Button>
      <Button variant="contained"  >Multi Player Games</Button>
      <Button variant="contained"  >Single Player Games</Button>
      <Button variant="contained"  >Adventure Player Games</Button>
      </div>
      <TableContainer component={Paper} classname="table">
      {AllGamesTable && <MyTable filteredGame={data} />}
      {TrendingGamesTable && <MyTable filteredGame={tgames} />}
    </TableContainer>
      </div> 
    )
}

export default GameDetail;