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
  { field: "Action", headerName: "Action", width: 230 },
  { field: "Date", headerName: "Date", width: 130 },
  { field: "Time", headerName: "Time", width: 130 },

];

const DatatableProfile = () => {
  const [data, setData] = useState([]);
  const [LogData, setLogs] = useState([]);
  const logRef = collection(db, "LogData");


  useEffect(() => {
    onSnapshot(logRef, (snapshot) => {
      setLogs(
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
      <div className="datatableTitle">YOUR  ACTIVITY</div>
      <DataGrid
        className="datagrid"
        rows={LogData.map((logs) => ({
          id: logs.id,
          Action: logs.Action,
          Date: logs.Date,
          Time: logs.Time,

        }))}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableProfile;
