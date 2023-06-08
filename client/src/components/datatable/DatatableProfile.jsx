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
  { field: "id", headerName: "ID", width: 250 },
  // { field: "firstName", headerName: "First name", width: 130 },
  // { field: "lastName", headerName: "Last name", width: 130 },
  { field: "Action", headerName: "Action", width: 230 },
  { field: "Date", headerName: "Date", width: 130,    valueFormatter: (params) =>
  new Date(params.value?.seconds * 1000).toLocaleDateString(),},

  

];

const DatatableProfile = () => {
  const [data, setData] = useState([]);
  const [LogData, setLogs] = useState([]);
  const logRef = collection(db, "LogCollection");


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
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
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
          // firstName: logs.Admin_Fname,
          // lastName: logs.Admin_lname,
          Action: logs.action,
          Date: logs.date_and_time,

        }))}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableProfile;
