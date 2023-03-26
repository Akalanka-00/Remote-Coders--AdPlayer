import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { db } from "../../../Services/firebase-config";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";

import "./AdminComplain.css";
const AdminComplain = () => {
  const tableHeadList = [
    "#",
    "User Id",
    "User Type",
    "Date",
    "Subject",
    "Description",
    "Status",
  ];

  const [complains, setComplains] = useState([]);
  const [selectReview, setSelectReview] = useState(true);
  const [reviewMark, setReviewMark] = useState({
    complained_Date: "",
    description: "",
    status: "Not Reviewed",
    title: "",
    user_Id: "CUS-0001",
    user_Type: "Cus",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  function handleShow(element) {
    setShow(true);
    markReviewedComplain(element);
  }

  const complainCollectionRef = collection(db, "ComplainCollection");

  function markReviewedComplain(element) {
    console.log(element);
    setReviewMark({
      complained_Date: element.complained_Date,
      description: element.description,
      status: true,
      title: element.title,
      user_Id: element.user_Id,
      user_Type: element.user_Type,
    });

    const updateComplainRef = doc(db, "ComplainCollection", element.id)
    updateDoc(updateComplainRef, reviewMark);
  }

  useEffect(() => {
    onSnapshot(complainCollectionRef, (snapshot) => {
      setComplains(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
    });
  }, []);
  return (
    <div className="admin-container">
      <div className="filter">
        <Button
          variant="success"
          onClick={() => {
            setSelectReview(!selectReview);
          }}
        >
          {!selectReview ? "Reviewed Complains" : "Not Reviewed Complains"}
        </Button>
      </div>
      <div className="heading">
        <div className="title">
          <h2>
            {selectReview ? "Reviewed Complains" : "Not Reviewed Complains"}
          </h2>
        </div>
      </div>
      <Table responsive>
        <thead>
          <tr>
            {tableHeadList.map((element, index) => (
              <td key={index}>{element}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {complains.map((element, index) => (
            <tr key={index}>
              {selectReview ? (
                <>
                  {element.status ? (
                    <>
                      <td>{index}</td>
                      <td>{element.user_Id}</td>
                      <td>{element.user_Type}</td>
                      <td>{element.complained_Date}</td>
                      <td>{element.title}</td>
                      <td>{element.description}</td>
                      <td>
                        {element.status ? "Reviewed" : "Not Reviewed Yet"}
                      </td>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <>
                  {!element.status ? (
                    <>
                      <td>{index}</td>
                      <td>{element.user_Id}</td>
                      <td>{element.user_Type}</td>
                      <td>{element.complained_Date}</td>
                      <td>{element.title}</td>
                      <td>{element.description}</td>
                      {element.status ? "Reviewed" : "Not Reviewed Yet"}
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => handleShow(element)}
                        >
                          Review
                        </Button>
                      </td>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminComplain;
