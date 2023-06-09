import "./gametable.scss";
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
  //{ field: "id", headerName: "ID", width: 100 },
  { field: "game_name", headerName: "Game Name", width: 270 },
  { field: "rank", headerName: "Rank", width: 150},
  { field: "platform", headerName: "Platform", width: 130 },
  //{ field: "status", headerName: "Status", width: 130 },
];

const DatatableAds = ({ id }) => {
  //const [data, setData] = useState([]);
  const [GameCollection, setAds] = useState([]);
  const adData_CollectionRef = collection(db, "GameCollection");
  const [count, setCount] = useState(0);
  const [selectedGameId, setSelectedAdId] = useState("");
  const [{ isLoading, apiData, serverError }] = useFetch({
    query: `getCustomerGameData/`,
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
    const docRef = doc(db, "GameCollection", selectedGameId);
    const data = {
      status: "approved",
    };
  };

  const handleReject = (e) => {
    e.preventDefault();
    const docRef = doc(db, "GameCollection", selectedGameId);
    const data = {
      status: "reject",
    };
  };


  return (
    <div className="datatable">
      <div className="datatableTitle">
        All Games
      </div>
      <DataGrid
        className="datagrid"
        rows={apiData.map((data, i) => ({
          id: data.id,
          game_name: data.game_name,
          rank: data.rank,
          platform: data.platform,
          ad_cost_rate: data.ad_cost_rate,
        }))}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DatatableAds;
