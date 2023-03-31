import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { db } from "../../../Services/firebase-config";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";

import "./AdminComplain.css";
const AdminComplain = () => {
  const tableHeadList = [
    //Table heading list
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

  function handleShow(element) {
    //handle the reviewed complains or not
    markReviewedComplain(element);
  }

  const complainCollectionRef = collection(db, "ComplainCollection"); // Create complain Collection

  function markReviewedComplain(element) {
    // Mark the complain as reviewed
    console.log(element);
    setReviewMark({
      complained_Date: element.complained_Date,
      description: element.description,
      status: true,
      title: element.title,
      user_Id: element.user_Id,
      user_Type: element.user_Type,
    });

    const updateComplainRef = doc(db, "ComplainCollection", element.id); //Update complain collection doc
    updateDoc(updateComplainRef, reviewMark); //Update the complain as reviewed
  }

  useEffect(() => {
    //Retrieved the Complain data
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
          {/* Check the state for the btn */}
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
            {/* Map Table headings to the table */}
            {tableHeadList.map((element, index) => (
              <td key={index}>{element}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Map the available complain to the table */}
          {complains.map((element, index) => (
            <tr key={index}>
              {/* Check is it reviewed or not */}
              {selectReview ? (
                <>
                  {/* Check the Complain status */}
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
