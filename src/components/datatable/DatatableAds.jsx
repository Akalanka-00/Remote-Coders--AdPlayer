import "./datatable.scss";
import "./popup.scss";
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

const DatatableAds = ({ id }) => {
  const [data, setData] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [AdData_Collection, setAds] = useState([]);
  const adData_CollectionRef = collection(db, "AdData_Collection");
  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedAdId, setSelectedAdId] = useState("");


  
  const q = query(adData_CollectionRef, where("Status", "==", "Pending"));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setAds(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
      setCount(snapshot.size);
    });
  }, []);


  const handleApprove = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "AdData_Collection", selectedAdId);
    const data = {
      Status: "Approved"
    };
    updateDoc(docRef, data)
    setPopupActive(false);
    alert("Advertisement approved successfully");
  };

  const handleReject = (e) => {
    e.preventDefault();
    setPopupActive(false);
    alert("Advertisment rejected succecfully");
  };

  function adView(params) {
    let imageString = params.Advertisement;
    let imageUrl = new URL(imageString);
    setImageUrl(imageUrl);
    //id = params;
    setSelectedAdId(params.id);
  }

  return (
    <div className="datatable">
      <div className="datatableTitle">
        PENDING ADVERTISMENTS Total number of ads:{count}
      </div>
      <table className="tableContainer">
        <thead>
          <tr>
            <th>ID</th>
            <th>Advertisment Name</th>
            <th>Published Date</th>
            <th>Game</th>
            <th>Region</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {AdData_Collection.map((ads, i) => (
            <tr key={i}>
              <td>{ads.id}</td>
              <td>{ads.Adname}</td>
              <td>{ads.PublishedDate}</td>
              <td>{ads.game || ads.Game}</td>
              <td>{ads.region || ads.Region}</td>
              <td>{ads.Status}</td>
              <td>
                <button
                  className="AdButton"
                  onClick={() => {
                    setPopupActive(!popupActive)
                    adView(ads)
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupActive && (
        <div className="popup">
          <div className="popupInner">
            <h3>Advertisement Preview</h3>
            <hr></hr>
            <img src={imageUrl} width="849" height="500" alt="Advertisement" />
            <hr></hr>
            <div className="buttonWrapper">
              <button
                className="buttonClose"
                onClick={() => setPopupActive(false)}
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
