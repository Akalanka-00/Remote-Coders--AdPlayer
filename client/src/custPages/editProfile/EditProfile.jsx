import { useState } from "react"
import { db } from "../../firebase";
import './editProfile.scss'
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import { TextField } from "@mui/material"
import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { collection, doc, updateDoc } from "firebase/firestore"
import ImageUploader from "../../components/ImageUpload/image";


const countries = [
    <option value="AF">Afghanistan</option>,
    <option value="AX">Aland Islands</option>,
    <option value="AL">Albania</option>,
    <option value="DZ">Algeria</option>,
    <option value="AS">American Samoa</option>,
    <option value="AD">Andorra</option>,
    <option value="AO">Angola</option>,
    <option value="AI">Anguilla</option>,
    <option value="AQ">Antarctica</option>,
    <option value="AG">Antigua and Barbuda</option>,
    <option value="AR">Argentina</option>,
    <option value="AM">Armenia</option>,
    <option value="AW">Aruba</option>,
    <option value="AU">Australia</option>,
    <option value="AT">Austria</option>,
    <option value="AZ">Azerbaijan</option>,
    <option value="BS">Bahamas</option>,
    <option value="BH">Bahrain</option>,
    <option value="BD">Bangladesh</option>,
    <option value="BB">Barbados</option>,
    <option value="BY">Belarus</option>,
    <option value="BE">Belgium</option>,
    <option value="BZ">Belize</option>,
    <option value="BJ">Benin</option>,
    <option value="BM">Bermuda</option>,
    <option value="BT">Bhutan</option>,
    <option value="BO">Bolivia</option>,
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>,
    <option value="BA">Bosnia and Herzegovina</option>,
    <option value="BW">Botswana</option>,
    <option value="BV">Bouvet Island</option>,
    <option value="BR">Brazil</option>,
    <option value="IO">British Indian Ocean Territory</option>,
    <option value="BN">Brunei Darussalam</option>,
    <option value="BG">Bulgaria</option>,
    <option value="BF">Burkina Faso</option>,
    <option value="BI">Burundi</option>,
    <option value="KH">Cambodia</option>,
    <option value="CM">Cameroon</option>,
    <option value="CA">Canada</option>,
    <option value="CV">Cape Verde</option>,
    <option value="KY">Cayman Islands</option>,
    <option value="CF">Central African Republic</option>,
    <option value="TD">Chad</option>,
    <option value="CL">Chile</option>,
    <option value="CN">China</option>,
    <option value="CX">Christmas Island</option>,
    <option value="CC">Cocos (Keeling) Islands</option>,
    <option value="CO">Colombia</option>,
    <option value="KM">Comoros</option>,
    <option value="CG">Congo</option>,
    <option value="CD">Congo, Democratic Republic of the Congo</option>,
    <option value="CK">Cook Islands</option>,
    <option value="CR">Costa Rica</option>,
    <option value="CI">Cote D'Ivoire</option>,
    <option value="HR">Croatia</option>,
    <option value="CU">Cuba</option>,
    <option value="CW">Curacao</option>,
    <option value="CY">Cyprus</option>,
    <option value="CZ">Czech Republic</option>,
    <option value="DK">Denmark</option>,
    <option value="DJ">Djibouti</option>,
    <option value="DM">Dominica</option>,
    <option value="DO">Dominican Republic</option>,
    <option value="EC">Ecuador</option>,
    <option value="EG">Egypt</option>,
    <option value="SV">El Salvador</option>,
    <option value="GQ">Equatorial Guinea</option>,
    <option value="ER">Eritrea</option>,
    <option value="EE">Estonia</option>,
    <option value="ET">Ethiopia</option>,
    <option value="FK">Falkland Islands (Malvinas)</option>,
    <option value="FO">Faroe Islands</option>,
    <option value="FJ">Fiji</option>,
    <option value="FI">Finland</option>,
    <option value="FR">France</option>,
    <option value="GF">French Guiana</option>,
    <option value="PF">French Polynesia</option>,
    <option value="TF">French Southern Territories</option>,
    <option value="GA">Gabon</option>,
    <option value="GM">Gambia</option>,
    <option value="GE">Georgia</option>,
    <option value="DE">Germany</option>,
    <option value="GH">Ghana</option>,
    <option value="GI">Gibraltar</option>,
    <option value="GR">Greece</option>,
    <option value="GL">Greenland</option>,
    <option value="GD">Grenada</option>,
    <option value="GP">Guadeloupe</option>,
    <option value="GU">Guam</option>,
    <option value="GT">Guatemala</option>,
    <option value="GG">Guernsey</option>,
    <option value="GN">Guinea</option>,
    <option value="GW">Guinea-Bissau</option>,
    <option value="GY">Guyana</option>,
    <option value="HT">Haiti</option>,
    <option value="HM">Heard Island and Mcdonald Islands</option>,
    <option value="VA">Holy See (Vatican City State)</option>,
    <option value="HN">Honduras</option>,
    <option value="HK">Hong Kong</option>,
    <option value="HU">Hungary</option>,
    <option value="IS">Iceland</option>,
    <option value="IN">India</option>,
    <option value="ID">Indonesia</option>,
    <option value="IR">Iran, Islamic Republic of</option>,
    <option value="IQ">Iraq</option>,
    <option value="IE">Ireland</option>,
    <option value="IM">Isle of Man</option>,
    <option value="IL">Israel</option>,
    <option value="IT">Italy</option>,
    <option value="JM">Jamaica</option>,
    <option value="JP">Japan</option>,
    <option value="JE">Jersey</option>,
    <option value="JO">Jordan</option>,
    <option value="KZ">Kazakhstan</option>,
    <option value="KE">Kenya</option>,
    <option value="KI">Kiribati</option>,
    <option value="KP">Korea, Democratic People's Republic of</option>,
    <option value="KR">Korea, Republic of</option>,
    <option value="XK">Kosovo</option>,
    <option value="KW">Kuwait</option>,
    <option value="KG">Kyrgyzstan</option>,
    <option value="LA">Lao People's Democratic Republic</option>,
    <option value="LV">Latvia</option>,
    <option value="LB">Lebanon</option>,
    <option value="LS">Lesotho</option>,
    <option value="LR">Liberia</option>,
    <option value="LY">Libyan Arab Jamahiriya</option>,
    <option value="LI">Liechtenstein</option>,
    <option value="LT">Lithuania</option>,
    <option value="LU">Luxembourg</option>,
    <option value="MO">Macao</option>,
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>,
    <option value="MG">Madagascar</option>,
    <option value="MW">Malawi</option>,
    <option value="MY">Malaysia</option>,
    <option value="MV">Maldives</option>,
    <option value="ML">Mali</option>,
    <option value="MT">Malta</option>,
    <option value="MH">Marshall Islands</option>,
    <option value="MQ">Martinique</option>,
    <option value="MR">Mauritania</option>,
    <option value="MU">Mauritius</option>,
    <option value="YT">Mayotte</option>,
    <option value="MX">Mexico</option>,
    <option value="FM">Micronesia, Federated States of</option>,
    <option value="MD">Moldova, Republic of</option>,
    <option value="MC">Monaco</option>,
    <option value="MN">Mongolia</option>,
    <option value="ME">Montenegro</option>,
    <option value="MS">Montserrat</option>,
    <option value="MA">Morocco</option>,
    <option value="MZ">Mozambique</option>,
    <option value="MM">Myanmar</option>,
    <option value="NA">Namibia</option>,
    <option value="NR">Nauru</option>,
    <option value="NP">Nepal</option>,
    <option value="NL">Netherlands</option>,
    <option value="AN">Netherlands Antilles</option>,
    <option value="NC">New Caledonia</option>,
    <option value="NZ">New Zealand</option>,
    <option value="NI">Nicaragua</option>,
    <option value="NE">Niger</option>,
    <option value="NG">Nigeria</option>,
    <option value="NU">Niue</option>,
    <option value="NF">Norfolk Island</option>,
    <option value="MP">Northern Mariana Islands</option>,
    <option value="NO">Norway</option>,
    <option value="OM">Oman</option>,
    <option value="PK">Pakistan</option>,
    <option value="PW">Palau</option>,
    <option value="PS">Palestinian Territory, Occupied</option>,
    <option value="PA">Panama</option>,
    <option value="PG">Papua New Guinea</option>,
    <option value="PY">Paraguay</option>,
    <option value="PE">Peru</option>,
    <option value="PH">Philippines</option>,
    <option value="PN">Pitcairn</option>,
    <option value="PL">Poland</option>,
    <option value="PT">Portugal</option>,
    <option value="PR">Puerto Rico</option>,
    <option value="QA">Qatar</option>,
    <option value="RE">Reunion</option>,
    <option value="RO">Romania</option>,
    <option value="RU">Russian Federation</option>,
    <option value="RW">Rwanda</option>,
    <option value="BL">Saint Barthelemy</option>,
    <option value="SH">Saint Helena</option>,
    <option value="KN">Saint Kitts and Nevis</option>,
    <option value="LC">Saint Lucia</option>,
    <option value="MF">Saint Martin</option>,
    <option value="PM">Saint Pierre and Miquelon</option>,
    <option value="VC">Saint Vincent and the Grenadines</option>,
    <option value="WS">Samoa</option>,
    <option value="SM">San Marino</option>,
    <option value="ST">Sao Tome and Principe</option>,
    <option value="SA">Saudi Arabia</option>,
    <option value="SN">Senegal</option>,
    <option value="RS">Serbia</option>,
    <option value="CS">Serbia and Montenegro</option>,
    <option value="SC">Seychelles</option>,
    <option value="SL">Sierra Leone</option>,
    <option value="SG">Singapore</option>,
    <option value="SX">Sint Maarten</option>,
    <option value="SK">Slovakia</option>,
    <option value="SI">Slovenia</option>,
    <option value="SB">Solomon Islands</option>,
    <option value="SO">Somalia</option>,
    <option value="ZA">South Africa</option>,
    <option value="GS">South Georgia and the South Sandwich Islands</option>,
    <option value="SS">South Sudan</option>,
    <option value="ES">Spain</option>,
    <option value="LK">Sri Lanka</option>,
    <option value="SD">Sudan</option>,
    <option value="SR">Suriname</option>,
    <option value="SJ">Svalbard and Jan Mayen</option>,
    <option value="SZ">Swaziland</option>,
    <option value="SE">Sweden</option>,
    <option value="CH">Switzerland</option>,
    <option value="SY">Syrian Arab Republic</option>,
    <option value="TW">Taiwan, Province of China</option>,
    <option value="TJ">Tajikistan</option>,
    <option value="TZ">Tanzania, United Republic of</option>,
    <option value="TH">Thailand</option>,
    <option value="TL">Timor-Leste</option>,
    <option value="TG">Togo</option>,
    <option value="TK">Tokelau</option>,
    <option value="TO">Tonga</option>,
    <option value="TT">Trinidad and Tobago</option>,
    <option value="TN">Tunisia</option>,
    <option value="TR">Turkey</option>,
    <option value="TM">Turkmenistan</option>,
    <option value="TC">Turks and Caicos Islands</option>,
    <option value="TV">Tuvalu</option>,
    <option value="UG">Uganda</option>,
    <option value="UA">Ukraine</option>,
    <option value="AE">United Arab Emirates</option>,
    <option value="GB">United Kingdom</option>,
    <option value="US">United States</option>,
    <option value="UM">United States Minor Outlying Islands</option>,
    <option value="UY">Uruguay</option>,
    <option value="UZ">Uzbekistan</option>,
    <option value="VU">Vanuatu</option>,
    <option value="VE">Venezuela</option>,
    <option value="VN">Viet Nam</option>,
    <option value="VG">Virgin Islands, British</option>,
    <option value="VI">Virgin Islands, U.s.</option>,
    <option value="WF">Wallis and Futuna</option>,
    <option value="EH">Western Sahara</option>,
    <option value="YE">Yemen</option>,
    <option value="ZM">Zambia</option>,
    <option value="ZW">Zimbabwe</option>
    
    ];

const EditProfile=()=>{
    const [selectedImageUrl, setSelectedImageUrl] = useState('https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=');

    const handleImageSelect = (url) => {
      setSelectedImageUrl(url);
    };
    const handleImageUpload = (url) => {
      setEditP((prevForm) => ({ ...prevForm, imageUrl: url }));
    };
    const [imageUpload, setImageUpload] = useState(null);
    const [editP, setEditP] = useState({
        fName: "",
        lName: "",
        email: "",
        contactNumber: "",
        country:"",
        imageUrl: ""
      })
    
      const receipesCollectionRef = collection(db, "CustomerCollection")
      const docRef = doc(receipesCollectionRef, "73MpbSe1Vr9QiXIoWCQ2") // replace "DOCUMENT_ID" with the ID of the document you want to update
    
      const handleSubmit = async e => {
        e.preventDefault()
    
        if (
          !editP.fName||
          !editP.lName||
          !editP.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)||
          !editP.contactNumber.match(/^\d{10}$/)||
          !editP.country
        
        ) {
          alert("Please re Check your entered data")
          return
        }
    
        try {
          await updateDoc(docRef, editP)
          alert("Data updated successfully")
        } catch (error) {
          console.error("Error updating document: ", error)
          alert("Error updating document")
        }
    
        setEditP({
          fName: "",
          lName: "",
          email: "",
         contactNumber:"",
         country:"",
         imageUrl: "",
        })
      }

      // const imagesListRef = ref(storage, "CustomerProfilePic/");
      // const uploadFile = () => {
      //   if (file == null) return;
      //   const imageNameWithUuid = `${file.name}-${v4()}`;
      //   const imageRef = ref(storage, `CustomerProfilePic/${imageNameWithUuid}`);
      //   uploadBytes(imageRef, file).then((snapshot) => {
      //     getDownloadURL(snapshot.ref).then((url) => {
      //       setImageUrls((prev) => [...prev, url]);
      //       setImageName("Updated successfully");
      //       setForm((prevForm) => ({ ...prevForm, profilepic: url }));
      //     });
      //   });
      // };
    
      // useEffect(() => {
      //   listAll(imagesListRef).then((response) => {
      //     response.items.forEach((item) => {
      //       getDownloadURL(item).then((url) => {
      //         setImageUrls((prev) => [...prev, url]);
      //       });
      //     });
      //   });
      // }, []);
    

    return(
        <div className='editProfile'>
<Sidebar/>
<div className='editProfilecontainer'>
<Navbar/>
<div className='top'>
<h1 className="newUser"> Edit Profile</h1>
</div>
<div className="bottom">
<div className="left">
<img src={selectedImageUrl} alt="" className="ItemImg" />
      <div className="editproform-group">
        <form>
          <ImageUploader onImageSelect={handleImageSelect} onImageUpload={handleImageUpload} />
        </form>
      </div>

            {/* <div className="imgUpload">
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
            </div> */}
      

</div>
<div className="right">
<form onSubmit={handleSubmit}>

    <div className="editproform-group">
    <TextField variant="outlined" label="First Name" value={editP.fName} onChange={e => setEditP({...editP,fName:e.target.value})}
    style={{width:"60%"}} />
    </div>

    <div className="editproform-group" >
    <TextField variant="outlined" label="Last Name" value={editP.lName} onChange={ e=> setEditP({...editP,lName:e.target.value})}
    style={{width:"60%"}}/>    
    </div>

    <div className="editproform-group">
    <TextField variant="outlined" label="Email Address" type="email"  value={editP.email} onChange={
    e=> setEditP({...editP,email:e.target.value})}
    style={{width:"60%"}}/>    
    </div>

    <div className="editproform-group">
    <TextField variant="outlined" label="Contact Number" type="number" value={editP.contactNumber} onChange={
    e=> setEditP({...editP,contactNumber:e.target.value}) } inputProps={{ maxLength: 10 }}
    style={{width:"60%"}} />    
    </div>

    <div className="editproform-group">
    <Box sx={{ display: 'flex', minWidth: 20}} >
    <FormControl  style={{ width: '60%', textAlign:"left", marginTop:"1px"}}>
        <InputLabel id="country-label">Country</InputLabel>
        <Select
            labelId="country-label"
            id="country-select"
            value={editP.country}
            onChange={e=> setEditP({...editP,country:e.target.value})}
        >
            {countries.map((option) => (
            <MenuItem key={option.props.value} value={option.props.value}>
                {option.props.children}
            </MenuItem>
            ))}
        </Select>
    </FormControl>
    </Box>
    </div>

<div style={{ marginTop:"20px",marginLeft:"450px",marginRight:"170px"}}>
  <Button variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>
</div>
</form>
</div>
</div>
</div>
        </div>
    )
}
export default EditProfile;