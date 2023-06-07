import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../../hook/Fetch";
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
  { field: "id", headerName: "ID", width: 230 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "email", headerName: "Email", type: "email", width: 250 },
  { field: "privilage1", headerName: "privilage1", width: 90 },
  { field: "privilage2", headerName: "privilage2", width: 90 },
  { field: "privilage3", headerName: "privilage3", width: 90 },
];

const DatatableAdmin = () => {
  const [data, setData] = useState([]);
  const [subadmin, setAdmins] = useState([]);
  const setAdminsRef = collection(db, "AdminCollection");
  const [count, setCount] = useState(0);
  const [{ isLoading, apiData, serverError }] = useFetch({
    query: `getAdminData/`,
    reqData: null,
    method: "get",
  });
  // useEffect(() => {
  //   onSnapshot(setAdminsRef, (snapshot) => {
  //     setAdmins(
  //       snapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           viewng: false,
  //           ...doc.data(),
  //         };
  //       })
  //     );
  //     setCount(snapshot.size);
  //   });
  // }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const removeData = (id) => {
    deleteDoc(doc(db, "AdminCollection", id));
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
        ADMINS Total admins: {apiData.total}
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={
          apiData.admins
            ? apiData.admins.map((data, i) => ({
                id: data.id,
                firstName: data.fname,
                lastName: data.lname,
                email: data.email,
                privilage1: data.privilage1,
                privilage2: data.privilage2,
                privilage3: data.privilage3,
              }))
            : []
        }
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableAdmin;
