import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { storage } from "../../firebase.config";
import { v4 } from "uuid";
import { db } from "../../firebase.config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
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

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [imageName, setImageName] = useState("");
  const [subadmin, setAdmins] = useState([]);

  const [form, setForm] = useState({
    Fname: "",
    Lname: "",
    email:"",
    password: "",
    privilage1: false,
    privilage2: false,
    privilage3: false,
    profilepic: "",
  });
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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.Fname ||
      !form.Lname ||
      !form.password
    ) {
      alert("Please fill out all fields");
      return;
    }

    addDoc(setAdminsRef, form);

    setForm({
      Fname: "",
      Lname: "",
      password: "",
      email:"",
      privilage1: "",
      privilage2: "",
      privilage3: "",
      profilepic: "",
    });

    alert("Data sent succecfully! It takes little time to upadate database");
  };

  const imagesListRef = ref(storage, "adminProfilePic/");
  const uploadFile = () => {
    if (file == null) return;
    const imageNameWithUuid = `${file.name}-${v4()}`;
    const imageRef = ref(storage, `adminProfilePic/${imageNameWithUuid}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        setImageName("Updated successfully")
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
              {imageUrls.map((url) => {
                //return <img src= />;
              })}
            </div>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  <h1>Admin Details</h1>
                </label>
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  {input.id !== "profilepic" && (
                    <div>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        value={form[input.id]}
                        onChange={(e) =>
                          setForm({ ...form, [input.id]: e.target.value })
                        }
                      />
                    </div>
                  )}
                </div>
              ))}
              <button onClick={handleSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
