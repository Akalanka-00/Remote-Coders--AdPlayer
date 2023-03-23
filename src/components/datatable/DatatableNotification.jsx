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
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'User_Id', headerName: 'User ID', width: 130 },
    { field: 'Title', headerName: 'Title', width: 130 },
    { field: 'Complained_Date', headerName: 'Complained Date', width: 130 },
    {field: 'Description',headerName: 'Description',type: 'text' ,width: 350,},
    {field: 'Status',headerName: 'Status',width: 90,},

  ];
  

  
const DatatableNotification = () => {
  const [data, setData] = useState([]);
  const [ComplainCollection, setComp] = useState([]);
  const complainCollectionRef = collection(db, "ComplainCollection");
  useEffect(() => {
    onSnapshot(complainCollectionRef, (snapshot) => {
        setComp(
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
  const removeData = (id) => {
    deleteDoc(doc(db, "subadmin", id));
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
              onClick={() => removeData(params.row.id)}
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
      <div className="datatableTitle">
        NOTIFICATIONS & COMPLAINTS
      </div>
      <DataGrid
        className="datagrid"
        rows={ComplainCollection.map((comp) => ({
          id: comp.id,
          User_Id: comp.User_Id,
          Title: comp.Title,
          Complained_Date: comp.Complained_Date,
          Description: comp.Description,
          Status: comp.Status
        }))}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableNotification;
