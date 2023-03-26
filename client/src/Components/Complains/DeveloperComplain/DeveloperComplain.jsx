import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { db } from "../../../Services/firebase-config";
import { collection, addDoc } from "firebase/firestore"

import "./DeveloperComplain.css";
const DeveloperComplain = () => {
  const [addComplainBtnState, setAddComplainBtnState] = useState(false);
  const [complain, setComplain] = useState(
    {
      complained_Date: "",
      description: "",
      status: false,
      title: "",
      user_Id: "Dev-0001",
      user_Type: "Dev"
    }
);

  const complainCollectionRef = collection(db,"ComplainCollection");
  const handleSubmit = e =>{
    e.preventDefault()
     

    if(
        !complain.title||
        !complain.description

    ){
        alert("Please fill out all fields")
      return
    }
        console.log(complain);
        addDoc(complainCollectionRef, complain);
        setComplain({
            complained_Date: "",
            description: "",
            status: false,
            title: "",
            user_Id: "Dev-0001",
            user_Type: "Dev"
          })

          alert("Data sent succecfully")
          setAddComplainBtnState(!addComplainBtnState);

    

  }

  return (
    <div className="complain-container">
      {addComplainBtnState ? (
        <div className="complain-content">
          <div className="complain-close-btn">
            <Button
              variant="outline-success"
              onClick={() => setAddComplainBtnState(!addComplainBtnState)}
            >
              Close Complain
            </Button>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <h1 className="complain-title">Add Complain</h1>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" vlaue={complain.title} 
              onChange = {e => setComplain({...complain, title: e.target.value})}/>
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <input type="text" vlaue={complain.description} 
              onChange = {e => setComplain({...complain, description: e.target.value})}/>
            </div>

            <div className="form-group">
            <Button
                type="submit"
                onClick={() => {
                  const today = new Date();
                  const time =
                    today.getFullYear() +
                    "." +
                    (today.getMonth() + 1) +
                    "." +
                    today.getDate() +
                    "-" +
                    today.getHours() +
                    ":" +
                    today.getMinutes() +
                    ":" +
                    today.getSeconds();
                  console.log(time);
                  setComplain({ ...complain, complained_Date: time });
                }}
                variant="primary"
              >
                Submit
              </Button>            </div>  
            
            
          </form>
        </div>
      ) : (
        <div className="new-complain-btn-holder">
          <Button
            variant="outline-danger"
            onClick={() => setAddComplainBtnState(!addComplainBtnState)}
          >
            Complain
          </Button>
        </div>
      )}
    </div>
  );
};

export default DeveloperComplain;
