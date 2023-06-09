import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./widgets.scss";
import {
  Button,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import { doc, onSnapshot, collection, query, orderBy, limit,getDocs } from "firebase/firestore";
import { TableContainer, Paper } from "@mui/material";

const Widgets = ({ title, link, widgettype }) => {
  const [adData, setAdData] = useState([]);
  const [gameData, setGameData] = useState([]);

  const adCollectionRef = collection(db, "AdvertisementCollection");
  const gameCollectionRef = collection(db, "GameCollection");

  useEffect(() => {
    const fetchAdvertisementData = async () => {
      try {
        const adQuery = query(adCollectionRef, orderBy("target_view_count", "desc"), limit(3));
        const snapshot = await getDocs(adQuery); // Use getDocs instead of onSnapshot
        setAdData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error(error);
      }
    };
    fetchAdvertisementData();
  }, []);
  
  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const gameQuery = query(gameCollectionRef, orderBy("rank"), limit(3));
        const snapshot = await getDocs(gameQuery); // Use getDocs instead of onSnapshot
        setGameData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error(error);
      }
    };
    fetchGameData();
  }, []);
  

  return (
    <div className="widgets">
      <div className="left">
        <div className="top">
          <h3>{title}</h3>
        </div>
        {widgettype === "adcollection" && (
          <TableContainer component={Paper}>
            <Table style={{width:"100%"}}>
              <TableHead>
                <TableRow>
                  {/* <TableCell>ID</TableCell> */}
                  <TableCell style={{ padding: "5px", paddingLeft: "40px"}}>Title</TableCell>
                  <TableCell style={{ padding: "5px", paddingLeft: "40px" }}>ViewCount</TableCell>
                  {/* Add other table columns based on your data structure */}
                </TableRow>
              </TableHead>
              <TableBody>
                {adData.map((ad) => (
                  <TableRow key={ad.id}>
                    {/* <TableCell>{ad.id}</TableCell> */}
                    <TableCell style={{ padding: "5px", paddingLeft: "40px" }}>{ad.name}</TableCell>
                    <TableCell style={{ padding: "5px", paddingLeft: "40px" }}>{ad.target_view_count}</TableCell>
                    {/* Add other table cells based on your data structure */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {widgettype === "gamecollection" && (
          <TableContainer component={Paper}>
            <Table style={{width:"100%"}}>
              <TableHead>
                <TableRow>
                  {/* <TableCell>ID</TableCell> */}
                  <TableCell style={{ padding: "5px", paddingLeft: "40px" }}>Name</TableCell>
                  {/* Add other table columns based on your data structure */}
                </TableRow>
              </TableHead>
              <TableBody>
                {gameData.map((game) => (
                  <TableRow key={game.id}>
                    {/* <TableCell>{game.id}</TableCell> */}
                    <TableCell style={{ padding: "5px", paddingLeft: "40px" }}>{game.game_name}</TableCell>
                    {/* Add other table cells based on your data structure */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      {/* <div className="right">r</div> */}
    </div>
  );
};

export default Widgets;