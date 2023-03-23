import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase.config";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "gameName", headerName: "Game Name", width: 130 },
  { field: "ownerID", headerName: "Owner ID", width: 130 },
  { field: "Rank", headerName: "Rank", width: 90 },
  { field: "View_count", headerName: "View Count", width: 90 },
  { field: "Published_Date", headerName: "Published Date", width: 250 },
  { field: "Status", headerName: "Status", width: 150 },
];

const DatatableGames = () => {
  const [data, setData] = useState([]);
  const [GamesCollection, setGames] = useState([]);
  const gamesCollectionRef = collection(db, "GamesCollection");
  const q = query(gamesCollectionRef, orderBy("Rank"));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setGames(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
    });
  });

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">GAME DETAILS</div>
      <DataGrid
        className="datagrid"
        rows={GamesCollection.map((games) => ({
          id: games.id,
          gameName: games.Name,
          ownerID: games.Owner_ID,
          Rank: games.Rank,
          View_count: games.View_count,
          Published_Date: games.Published_Date,
          Status: games.Status,
        }))}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableGames;
