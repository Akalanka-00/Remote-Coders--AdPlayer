import { useState } from 'react';
import { storage } from './Custfirebase';
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import './CusFormStyle.css'
import { Button } from '@mui/material';
import { color } from '@mui/system';
import { Input } from '@mui/icons-material';
function Image() {
  const [imageUpload, setImageUpload] = useState(null)
  const uploadImage = async () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}${v4()}`);
    try {
      await uploadBytes(imageRef, imageUpload);
      alert("Image uploaded");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
        <div>
          <div style={{width:"150px",height:"150px", outline:"5px dotted gray",padding:"20px",margin:"10px",marginTop:"25px"}}>
    
<label for="file-upload">Upload Your Image:</label>

<input style={{content:""}} type="file" id="file-upload" name="file-upload" onChange={(event) => { setImageUpload(event.target.files[0]) }} />

<Button style={{ fontSize:'9px',backgroundColor:"rgb(0, 138, 197)",color:"white",marginLeft:"8px"}} onClick={uploadImage}>Upload Image</Button>
          </div>

      
        </div>
       
     
    </div>
    

  );
}

export default Image;
