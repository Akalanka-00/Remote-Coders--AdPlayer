import "./new.scss";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { storage } from "../../firebase.config";
import { v4 } from "uuid";
import { db } from "../../firebase.config";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

// import baseUrl from "../../Apis/baseUrl";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [imageName, setImageName] = useState("");
  const [subadmin, setAdmins] = useState([]);

  const [formData, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    privilage1: false,
    privilage2: false,
    privilage3: false,
    profilepic: "",
  });

  // function sendNotification() {
  //   baseUrl
  //     .post("/api/admin/add/form", formData)
  //     .then((res) => {
  //       alert(res.data);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }

  const setAdminsRef = collection(db, "AdminCollection");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fname || !formData.lname || !formData.password) {
      alert("Please fill out all fields");
      return;
    }

    addDoc(setAdminsRef, formData);

    setForm({
      fname: "",
      lname: "",
      password: "",
      confirmPassword: "",
      email: "",
      privilage1: "",
      privilage2: "",
      privilage3: "",
      profilepic: "",
    });

    alert("Data sent succecfully! It takes little time to upadate database");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!formData.fname || !formData.lname || !formData.password) {
  //     alert("Please fill out all fields");
  //     return;
  //   } else if (formData.confirmPassword !== formData.password) {
  //     alert("Re-entered password is not match with password you entered");
  //   } else {
  //     sendNotification();
  //     alert("Data sent succecfully! It takes little time to upadate database");
  //   }
  // };
/*________________________________________________________ */
  const imagesListRef = ref(storage, "adminProfilePic/");
  const uploadFile = () => {
    if (file == null) return;
    const imageNameWithUuid = `${file.name}-${v4()}`;
    const imageRef = ref(storage, `adminProfilePic/${imageNameWithUuid}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        setImageName("Updated successfully");
        setForm((prevForm) => ({ ...prevForm, profilepic: url }));
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  /*____________________________________________________*/ 

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="profilepic">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="imgUpload">
              <label htmlFor="file-upload" className="custom-file-upload">
                Choose File
              </label>
              {imageName && <p>Selected image: {imageName}</p>}
              <input
                id="file-upload"
                type="file"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                  setImageName(event.target.files[0].name);
                }}
              />
              <button className="imguploadb" onClick={uploadFile}>
                {" "}
                Upload Image
              </button>
            </div>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  <h1>Admin Details</h1>
                </label>
                <div>
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    value={formData.fname}
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        fname: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    value={formData.lname}
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        lname: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        password: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        confirmPassword: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="privilage1">
                    Privilage for handle financial activities
                  </label>
                  <input
                    type="checkbox"
                    id="privilage1"
                    checked={formData.privilage1}
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        privilage1: e.target.checked,
                      }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="privilage2">
                    Privilage for handle customers
                  </label>
                  <input
                    type="checkbox"
                    id="privilage2"
                    checked={formData.privilage2}
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        privilage2: e.target.checked,
                      }))
                    }
                  />
                </div>
                <div>
                  <label htmlFor="privilage3">
                    Privilage for approve games
                  </label>
                  <input
                    type="checkbox"
                    id="privilage3"
                    checked={formData.privilage3}
                    onChange={(e) =>
                      setForm((prevForm) => ({
                        ...prevForm,
                        privilage3: e.target.checked,
                      }))
                    }
                  />
                </div>
                <button onClick={handleSubmit}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
