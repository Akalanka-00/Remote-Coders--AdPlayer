import "../datatable/datatable.scss";
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
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "email", headerName: "Email", type: "email", width: 250 },
  { field: "privilage1", headerName: "privilage1", width: 90 },
  { field: "privilage2", headerName: "privilage2", width: 90 },
  { field: "privilage3", headerName: "privilage3", width: 90 },
];

const Table = () => {
  const [data, setData] = useState([]);
  const [subadmin, setAdmins] = useState([]);
  const setAdminsRef = collection(db, "AdminCollection");
  useEffect(() => {
    onSnapshot(setAdminsRef, (snapshot) => {
      setAdmins(
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

  return (
    <div className="datatable">
      <div className="datatableTitle">
        ADMINS Total number of admins: {subadmin.length}
      </div>
      <DataGrid
        className="datagrid"
        rows={subadmin.map((admin) => ({
          id: admin.id,
          firstName: admin.Fname,
          lastName: admin.Lname,
          email: admin.email,
          privilage1: admin.privilage1,
          privilage2: admin.privilage2,
          privilage3: admin.privilage3,
        }))}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
