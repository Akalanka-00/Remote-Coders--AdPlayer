import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/datatable/DatatableProfile";
import { useState, useEffect } from "react";
import profile from "../../imgs/profile.jpg"
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

const Single = () => {

  const id = "NUEVnkUvpElrQ1eBTFpk";
  const [subadmin, setAdmins] = useState([]);
  const setAdminsRef = collection(db, "subadmin");
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
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={profile}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Hasitha</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">hasithasawbhagya@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+0000000</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Yakkala,Sri Lanka
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Log Data ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Activities</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
