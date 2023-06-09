import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import useFetch from "../../hook/Fetch";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  onSnapshot,
  doc
} from "firebase/firestore";

const columns = [
  { field: "id", headerName: "ID", width: 270 },
  { field: "name", headerName: "Ad Name", width: 160 },
  { field: "published_date", headerName: "Published Date", width: 250, valueFormatter: (params) => new Date(params.value?.seconds * 1000).toLocaleDateString() },
  { field: "status", headerName: "Status", width: 130 },
];

const DatatableAds = ({ id }) => {
  //const [data, setData] = useState([]);
  const [AdvertisementCollection, setAds] = useState([]);
  const adData_CollectionRef = collection(db, "AdvertisementCollection");
  const [count, setCount] = useState(0);
  const [selectedAdId, setSelectedAdId] = useState("");
  const [{ isLoading, apiData, serverError }] = useFetch({
    query: `getCustomerAdsData/`,
    reqData: null,
    method: "get",
  });

  const q = adData_CollectionRef;

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setAds(snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          viewng: false,
          ...doc.data(),
        };
      }));
      setCount(snapshot.size);
    });
  }, []);

  const handleApprove = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "AdvertisementCollection", selectedAdId);
    const data = {
      status: "Approved",
    };
  };

  const handleReject = (e) => {
    e.preventDefault();
    const docRef = doc(db, "AdvertisementCollection", selectedAdId);
    const data = {
      status: "Reject",
    };
  };


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Your Ads
      </div>
      <DataGrid
        className="datagrid"
        rows={apiData.map((data, i) => ({
          id: data.id,
          name: data.name,
          published_date: data.published_date,
          status: data.status,
        }))}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableAds;
