import { useState } from 'react';
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { Button } from '@mui/material';

function ADImageUploader({ onImageSelect, onImageUpload }) {
  const [imageUpload, setImageUpload] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
    if (file) {
      const url = URL.createObjectURL(file);
      onImageSelect(url);
    }
  };

  const uploadImage = async () => {
    if (imageUpload === null) return;
    const img = new Image();
    img.src = URL.createObjectURL(imageUpload);
    img.onload = () => {
      if (img.naturalWidth >= 480 && img.naturalHeight >= 480) {
        const imageRef = ref(storage, `AdvertisementPictures/${imageUpload.name}${v4()}`);
        uploadBytes(imageRef, imageUpload)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              alert("Image uploaded");
              onImageUpload(url);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("Image resolution must be 480p or higher. Cannot upload.");
      }
    };
  };
  
  return (
    <div className="container">
      <div>
        <Button style={{ fontSize:'9px',backgroundColor:"rgb(0, 138, 197)",color:"white",marginLeft:"8px"}}>
          <label htmlFor="file-upload">Select Image</label>
        </Button>
        <input style={{ display: 'none' }} type="file" id="file-upload" name="file-upload" accept="image/*" display="none" onChange={handleFileChange} />
        <Button style={{ fontSize:'9px',backgroundColor:"rgb(0, 138, 197)",color:"white",marginLeft:"8px"}} onClick={uploadImage}>Upload Image</Button>
      </div>
    </div>
  );
}

export default ADImageUploader;
