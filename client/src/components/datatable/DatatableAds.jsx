import "./datatable.scss";
import "./popup.scss";
import { DataGrid } from "@mui/x-data-grid";
import useFetch from "../../hook/Fetch";
import { useState, useEffect, getDocs } from "react";
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
  updateDoc,
} from "firebase/firestore";

const formatDate = (timestamp) => {
  const seconds = timestamp._seconds;
  const milliseconds = timestamp._nanoseconds / 1e6;
  const date = new Date(seconds * 1000 + milliseconds);
  return date.toLocaleDateString();
};


const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Ad Name", width: 130 },
  { field: "ad_type_id", headerName: "Ad type", width: 130 },
  {
    field: "published_date",
    headerName: "Published Date",
    width: 250,
    valueFormatter: (params) => formatDate(params.value),
  },
  { field: "country", headerName: "Country", width: 150 },
  { field: "status", headerName: "Status", width: 130 },
];

const DatatableAds = ({ id }) => {
  const [data, setData] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [AdvertisementCollection, setAds] = useState([]);
  const adData_CollectionRef = collection(db, "AdvertisementCollection");
  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedAdId, setSelectedAdId] = useState("");



  const [{ isLoading, apiData, serverError }] = useFetch({
    query: `getAdsData/`,
    reqData: null,
    method: "get",
  });

  const q = query(
    adData_CollectionRef,
    where("status", "==", "Pending" || "pending" || "Reject")
  );

  // useEffect(() => {
  //   onSnapshot(q, (snapshot) => {
  //     setAds(
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

  const handleViewButtonClick = (params) => {
    setPopupActive(!popupActive);
    adView(params);
  };
  

  const handleApprove = async (e) =>{
    e.preventDefault();
    const docRef = doc(db, "AdvertisementCollection", selectedAdId);
    const data = {
      status: "Approved",
    };
    updateDoc(docRef, data);
    setPopupActive(false);
    alert("Advertisement approved successfully");
  };
  

  const handleReject = (e) => {
    e.preventDefault();
    const docRef = doc(db, "AdvertisementCollection", selectedAdId);
    const data = {
      status: "Reject",
    };
    updateDoc(docRef, data);
    setPopupActive(false);
    alert("Advertisment rejected succecfully");
  };

  function adView(params) {
    let imageUrl = params.row.imageUrl;
    if (/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(imageUrl)) {
      setImageUrl(imageUrl);
      setSelectedAdId(params.id);
    } else {
      console.error("Invalid URL: " + imageUrl);
    }
  }
  
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="AdButton"
              onClick={() => {
                handleViewButtonClick(params);
              }}
            >
              View
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        ADVERTISMENTS Total ads:{apiData.total}
      </div>
      <DataGrid
        className="datagrid"
        rows={
          apiData.ads
          ? apiData.ads.map((data, i) => ({
          id: data.id,
          name: data.name,
          ad_type_id: data.ad_type_id,
          published_date: data.published_date,
          country: data.country,
          status: data.status,
          imageUrl: data.ad_data, // Add the imageUrl field
          
        }))
        :[]
      }
        
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />

      {popupActive && (
        <div className="popupw">
          <div className="popupInner">
            <h3>Advertisement Preview</h3>
            <hr></hr>
            <img src={imageUrl} width="849" height="500" alt="Advertisement" />
            <hr></hr>
            <div className="buttonWrapper">
              <button
                className="buttonClose"
                onClick={() => {
                  setPopupActive(false);
                }}
                
              >
                Close
              </button>
              <button className="buttonReject" onClick={handleReject}>
                Reject
              </button>
              <button className="buttonApprove" onClick={handleApprove}>
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatatableAds;
