import "./datatable.scss";
import "./popup.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import useFetch from "../../hook/Fetch";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { db } from "../../firebase.config";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore";

const formatDate = (timestamp) => {
  const seconds = timestamp._seconds;
  const milliseconds = timestamp._nanoseconds / 1e6;
  const date = new Date(seconds * 1000 + milliseconds);
  return date.toLocaleDateString();
};


const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "game_name", headerName: "Game Name", width: 130 },
  { field: "ad_cost_rate", headerName: "Ad cost rate", width: 130 },
  { field: "Resolution", headerName: "Resolution", width: 130 },
  { field: "rank", headerName: "Rank", width: 90, editable: true },
  {
    field: "published_date",
    headerName: "Published Date",
    width: 250,
    valueFormatter: (params) => formatDate(params.value),
  },
  { field: "status", headerName: "Status", width: 150 },
];

const DatatableGames = () => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [count, setCount] = useState(0);
  const [{ isLoading, apiData, serverError }] = useFetch({
    query: `getGameData/`,
    reqData: null,
    method: "get",
  });

  const handleViewButtonClick = (rowData) => {
    setSelectedRowData(rowData);
    setShowPopup(true);
  };

  const handleFieldChange = (field, value) => {
    setSelectedRowData((prevData) => ({
      ...prevData,
      [field]: Array.isArray(value) ? value : [value],
    }));
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleViewButtonClick(params.row)}
            >
              Edit
            </div>
            <div
              className="deleteButton"
              onClick={async () => {
                const docRef = doc(db, "GameCollection", params.row.id);
                await deleteDoc(docRef);
              }}
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
      <div className="datatableTitle">GAME DETAILS Total games:{apiData.total}</div>
      <DataGrid
  className="datagrid"
  rows={
    apiData.games
      ? apiData.games.map((data, i) => ({
          id: data.id,
          game_name: data.game_name,
          ad_cost_rate: data.ad_cost_rate,
          Resolution: data.Resolution,
          rank: data.rank,
          published_date: data.published_date,
          status: data.status,
        }))
      : []
  }
  columns={columns.concat(actionColumn)}
  pageSize={9}
  rowsPerPageOptions={[9]}
/>


      {showPopup && (
        <div className="popupw">
          <div className="popupInner">
            <h2>Selected Row Data</h2>
            <div className="popupContent">
              <FormControl>
                <InputLabel id="resolution-label" className="resolution-label">
                  Resolution
                </InputLabel>

                <Select
                  labelId="resolution-label"
                  id="resolution-select"
                  value={selectedRowData.Resolution}
                  onChange={(e) =>
                    handleFieldChange("Resolution", e.target.value)
                  }
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
              {/* Other fields and buttons */}
            </div>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatatableGames;
