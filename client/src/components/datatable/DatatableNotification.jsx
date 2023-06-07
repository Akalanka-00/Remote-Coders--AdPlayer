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
  { field: "id", headerName: "ID", width: 70 },
  { field: "User_Id", headerName: "User ID", width: 130 },
  { field: "Title", headerName: "Title", width: 130 },
  {
    field: "Complained_Date",
    headerName: "Complained Date",
    width: 130,
    valueFormatter: (params) =>
      new Date(params.value?.seconds * 1000).toLocaleDateString(),
  },
  { field: "Description", headerName: "Description", type: "text", width: 500 },
  { field: "Status", headerName: "Status", width: 90 },
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
            {/* <div className="viewButton">View</div> */}
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
      <div className="datatableTitle">NOTIFICATIONS & COMPLAINTS</div>
      <DataGrid
        className="datagrid"
        rows={ComplainCollection.map((comp) => ({
          id: comp.id,
          User_Id: comp.sender_id,
          Title: comp.title,
          Complained_Date: comp.complained_Date,
          Description: comp.description,
          Status: comp.status,
        }))}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableNotification;
