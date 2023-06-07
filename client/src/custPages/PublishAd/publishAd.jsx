import React from "react";
import './publishAd.scss';
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import { useState,useEffect } from "react"
import { db } from "../../firebase";
import { Card, CardContent, Grid, Select,FormControlLabel,Checkbox,MenuItem ,FormControl,InputLabel,Button,TextField} from "@material-ui/core";
import { collection, onSnapshot, addDoc,orderBy,query, limit} from "firebase/firestore"
import { NavLink } from "react-router-dom"
import {Multiselect} from 'multiselect-react-dropdown'
import ImageUploader from "../../components/ImageUpload/image";
import { storage } from "../../firebase";
import { getDownloadURL } from "firebase/storage";
const PublishAd=()=>{

    const [receipes,setreceipes]=useState([]) //because the receipes are in an array
    const [gameDetails, setGames] = useState([])
    const gamesRef = collection(db, "GameCollection");
    const data=[
      { Country: 'Afghanistan', id: 1 },
      { Country: 'Aland Islands', id: 2 },
      { Country: 'Albania', id: 3 },
      { Country: 'Algeria', id: 4 },
      { Country: 'American Samoa', id: 5 },
      { Country: 'Andorra', id: 6 },
      { Country: 'Angola', id: 7 },
      { Country: 'Anguilla', id: 8 },
      { Country: 'Antarctica', id: 9 },
      { Country: 'Antigua and Barbuda', id: 10 },
      { Country: 'Argentina', id: 11 },
      { Country: 'Armenia', id: 12 },
      { Country: 'Aruba', id: 13 },
      { Country: 'Australia', id: 14 },
      { Country: 'Austria', id: 15 },
      { Country: 'Azerbaijan', id: 16 },
      { Country: 'Bahamas', id: 17 },
      { Country: 'Bahrain', id: 18 },
      { Country: 'Bangladesh', id: 19 },
      { Country: 'Barbados', id: 20 },
      { Country: 'Belarus', id: 21 },
      { Country: 'Belgium', id: 22 },
      { Country: 'Belize', id: 23 },
      { Country: 'Benin', id: 24 },
      { Country: 'Bermuda', id: 25 },
      { Country: 'Bhutan', id: 26 },
      { Country: 'Bolivia', id: 27 },
      { Country: 'Bonaire, Sint Eustatius and Saba', id: 28 },
      { Country: 'Bosnia and Herzegovina', id: 29 },
      { Country: 'Botswana', id: 30 },
      { Country: 'Bouvet Island', id: 31 },
      { Country: 'Brazil', id: 32 },
      { Country: 'British Indian Ocean Territory', id: 33 },
      { Country: 'Brunei Darussalam', id: 34 },
      { Country: 'Bulgaria', id: 35 },
      { Country: 'Burkina Faso', id: 36 },
      { Country: 'Burundi', id: 37 },
      { Country: 'Cambodia', id: 38 },
      { Country: 'Cameroon', id: 39 },
      { Country: 'Canada', id: 40 },
      { Country: 'Cape Verde', id: 41 },
      { Country: 'Cayman Islands', id: 42 },
      { Country: 'Central African Republic', id: 43 },
      { Country: 'Chad', id: 44 },
      { Country: 'Chile', id: 45 },
      { Country: 'China', id: 46 },
      { Country: 'Christmas Island', id: 47 },
      { Country: 'Cocos (Keeling) Islands', id: 48 },
      { Country: 'Colombia', id: 49 },
      { Country: 'Comoros', id: 50 },
      { Country: 'Congo', id: 51 },
      { Country: 'Congo, Democratic Republic of the Congo', id: 52 },
      { Country: 'Cook Islands', id: 53 },
      { Country: 'Costa Rica', id: 54 },
      { Country: 'Cote d\'Ivoire', id: 55 },
      { Country: 'Croatia', id: 56 },
      { Country: 'Cuba', id: 57 },
      { Country: 'Curacao', id: 58 },
      { Country: 'Cyprus', id: 59 },
      { Country: 'Czech Republic', id: 60 },
      { Country: 'Denmark', id: 61 },
      { Country: 'Djibouti', id: 62 },
      { Country: 'Dominica', id: 63 },
      { Country: 'Dominican Republic', id: 64 },
      { Country: 'Ecuador', id: 65 },
      { Country: 'Egypt', id: 66 },
      { Country: 'El Salvador', id: 67 },
      { Country: 'Equatorial Guinea', id: 68 },
      { Country: 'Eritrea', id: 69 },
      { Country: 'Estonia', id: 70 },
      { Country: 'Ethiopia', id: 71 },
      { Country: 'Falkland Islands (Malvinas)', id: 72 },
      { Country: 'Faroe Islands', id: 73 },
      { Country: 'Fiji', id: 74 },
      { Country: 'Finland', id: 75 },
      { Country: 'France', id: 76 },
      { Country: 'French Guiana', id: 77 },
      { Country: 'French Polynesia', id: 78 },
      { Country: 'French Southern Territories', id: 79 },
      { Country: 'Gabon', id: 80 },
      { Country: 'Gambia', id: 81 },
      { Country: 'Georgia', id: 82 },
      { Country: 'Germany', id: 83 },
      { Country: 'Ghana', id: 84 },
      { Country: 'Gibraltar', id: 85 },
      { Country: 'Greece', id: 86 },
      { Country: 'Greenland', id: 87 },
      { Country: 'Grenada', id: 88 },
      { Country: 'Guadeloupe', id: 89 },
      { Country: 'Guam', id: 90 },
      { Country: 'Guatemala', id: 91 },
      { Country: 'Guernsey', id: 92 },
      { Country: 'Guinea', id: 93 },
      { Country: 'Guinea-Bissau', id: 94 },
      { Country: 'Guyana', id: 95 },
      { Country: 'Haiti', id: 96 },
      { Country: 'Heard Island and McDonald Islands', id: 97 },
      { Country: 'Holy See (Vatican City State)', id: 98 },
      { Country: 'Honduras', id: 99 },
      { Country: 'Hong Kong', id: 100 },
      { Country: 'Hungary', id: 101 },
      { Country: 'Iceland', id: 102 },
      { Country: 'India', id: 103 },
      { Country: 'Indonesia', id: 104 },
      { Country: 'Iran, Islamic Republic of', id: 105 },
      { Country: 'Iraq', id: 106 },
      { Country: 'Ireland', id: 107 },
      { Country: 'Isle of Man', id: 108 },
      { Country: 'Israel', id: 109 },
      { Country: 'Italy', id: 110 },
      { Country: 'Jamaica', id: 111 },
      { Country: 'Japan', id: 112 },
      { Country: 'Jersey', id: 113 },
      { Country: 'Jordan', id: 114 },
      { Country: 'Kazakhstan', id: 115 },
      { Country: 'Kenya', id: 116 },
      { Country: 'Kiribati', id: 117 },
      { Country: 'Korea, Democratic People\'s Republic of', id: 118 },
      { Country: 'Korea, Republic of', id: 119 },
      { Country: 'Kuwait', id: 120 },
      { Country: 'Kyrgyzstan', id: 121 },
      { Country: 'Lao People\'s Democratic Republic', id: 122 },
      { Country: 'Latvia', id: 123 },
      { Country: 'Lebanon', id: 124 },
      { Country: 'Lesotho', id: 125 },
      { Country: 'Liberia', id: 126 },
      { Country: 'Libyan Arab Jamahiriya', id: 127 },
      { Country: 'Liechtenstein', id: 128 },
      { Country: 'Lithuania', id: 129 },
      { Country: 'Luxembourg', id: 130 },
      { Country: 'Macao', id: 131 },
      { Country: 'Macedonia', id: 132 },
      { Country: 'Madagascar', id: 133 },
      { Country: 'Malawi', id: 134 },
      { Country: 'Malaysia', id: 135 },
      { Country: 'Maldives', id: 136 },
      { Country: 'Mali', id: 137 },
      { Country: 'Malta', id: 138 },
      { Country: 'Marshall Islands', id: 139 },
      { Country: 'Martinique', id: 140 },
      { Country: 'Mauritania', id: 141 },
      { Country: 'Mauritius', id: 142 },
      { Country: 'Mayotte', id: 143 },
      { Country: 'Mexico', id: 144 },
      { Country: 'Micronesia, Federated States of', id: 145 },
      { Country: 'Moldova, Republic of', id: 146 },
      { Country: 'Monaco', id: 147 },
      { Country: 'Mongolia', id: 148 },
      { Country: 'Montenegro', id: 149 },
      { Country: 'Montserrat', id: 150 },
      { Country: 'Morocco', id: 151 },
      { Country: 'Mozambique', id: 152 },
      { Country: 'Myanmar', id: 153 },
      { Country: 'Namibia', id: 154 },
      { Country: 'Nauru', id: 155 },
      { Country: 'Nepal', id: 156 },
      { Country: 'Netherlands', id: 157 },
      { Country: 'New Caledonia', id: 158 },
      { Country: 'New Zealand', id: 159 },
      { Country: 'Nicaragua', id: 160 },
      { Country: 'Niger', id: 161 },
      { Country: 'Nigeria', id: 162 },
      { Country: 'Niue', id: 163 },
      { Country: 'Norfolk Island', id: 164 },
      { Country: 'Northern Mariana Islands', id: 165 },
      { Country: 'Norway', id: 166 },
      { Country: 'Oman', id: 167 },
      { Country: 'Pakistan', id: 168 },
      { Country: 'Palau', id: 169 },
      { Country: 'Palestinian Territory, Occupied', id: 170 },
      { Country: 'Panama', id: 171 },
      { Country: 'Papua New Guinea', id: 172 },
      { Country: 'Paraguay', id: 173 },
      { Country: 'Peru', id: 174 },
      { Country: 'Philippines', id: 175 },
      { Country: 'Pitcairn', id: 176 },
      { Country: 'Poland', id: 177 },
      { Country: 'Portugal', id: 178 },
      { Country: 'Puerto Rico', id: 179 },
      { Country: 'Qatar', id: 180 },
      { Country: 'Reunion', id: 181 },
      { Country: 'Romania', id: 182 },
      { Country: 'Russian Federation', id: 183 },
      { Country: 'Rwanda', id: 184 },
      { Country: 'Saint Barthelemy', id: 185 },
      { Country: 'Saint Helena', id: 186 },
      { Country: 'Saint Kitts and Nevis', id: 187 },
      { Country: 'Saint Lucia', id: 188 },
      { Country: 'Saint Martin (French part)', id: 189 },
      { Country: 'Saint Pierre and Miquelon', id: 190 },
      { Country: 'Saint Vincent and the Grenadines', id: 191 },
      { Country: 'Samoa', id: 192 },
      { Country: 'San Marino', id: 193 },
      { Country: 'Sao Tome and Principe', id: 194 },
      { Country: 'Saudi Arabia', id: 195 },
      { Country: 'Senegal', id: 196 },
      { Country: 'Serbia', id: 197 },
      { Country: 'Seychelles', id: 198 },
      { Country: 'Sierra Leone', id: 199 },
      { Country: 'Singapore', id: 200 },
      { Country: 'Sint Maarten (Dutch part)', id: 201 },
      { Country: 'Slovakia', id: 202 },
      { Country: 'Slovenia', id: 203 },
      { Country: 'Solomon Islands', id: 204 },
      { Country: 'Somalia', id: 205 },
      { Country: 'South Africa', id: 206 },
      { Country: 'South Georgia and the South Sandwich Islands', id: 207 },
      { Country: 'South Sudan', id: 208 },
      { Country: 'Spain', id: 209 },
      { Country: 'Sri Lanka', id: 210 },
      { Country: 'Sudan', id: 211 },
      { Country: 'Suriname', id: 212 },
      { Country: 'Svalbard and Jan Mayen', id: 213 },
      { Country: 'Swaziland', id: 214 },
      { Country: 'Sweden', id: 215 },
      { Country: 'Switzerland', id: 216 },
      { Country: 'Syrian Arab Republic', id: 217 },
      { Country: 'Taiwan', id: 218 },
      { Country: 'Tajikistan', id: 219 },
      { Country: 'Tanzania, United Republic of', id: 220 },
      { Country: 'Thailand', id: 221 },
      { Country: 'Timor-Leste', id: 222 },
      { Country: 'Togo', id: 223 },
      { Country: 'Tokelau', id: 224 },
      { Country: 'Tonga', id: 225 },
      { Country: 'Trinidad and Tobago', id: 226 },
      { Country: 'Tunisia', id: 227 },
      { Country: 'Turkey', id: 228 },
      { Country: 'Turkmenistan', id: 229 },
      { Country: 'Turks and Caicos Islands', id: 230 },
      { Country: 'Tuvalu', id: 231 },
      { Country: 'Uganda', id: 232 },
      { Country: 'Ukraine', id: 233 },
      { Country: 'United Arab Emirates', id: 234 },
      { Country: 'United Kingdom', id: 235 },
      { Country: 'United States', id: 236 },
      { Country: 'United States Minor Outlying Islands', id: 237 },
      { Country: 'Uruguay', id: 238 },
      { Country: 'Uzbekistan', id: 239 },
      { Country: 'Vanuatu', id: 240 },
      { Country: 'Venezuela', id: 241 },
      { Country: 'Vietnam', id: 242 },
      { Country: 'Virgin Islands, British', id: 243 },
      { Country: 'Virgin Islands, U.S.', id: 244 },
      { Country: 'Wallis and Futuna', id: 245 },
      { Country: 'Western Sahara', id: 246 },
      { Country: 'Yemen', id: 247 },
      { Country: 'Zambia', id: 248 },
      { Country: 'Zimbabwe', id: 249 }
  ]
    const [options]=useState(data);
    const [form,setForm]=useState({     //display
     Adname:"",   
     Adtype:"",
     game:"",
     duration:"",
     resolution:"",
     tgames:false,
     country:[],
     Status:"pending",
     AdViewCount:"0",
     imageURL: ""
  })
  const receipesCollectionRef=collection(db,"AdvertisementCollection")
  const [selectedImageURL, setSelectedImageURL] = useState(null);
  const handleImageUpload = async (imagePath) => {
    try {
      const imageURL = await getDownloadURL(storage, imagePath);
      setForm({ ...form, imageURL });
    } catch (error) {
      console.error("Error getting image URL:", error);
    }
  };

  const handleImageSelect = (url) => {
    setSelectedImageURL(url);
  };
  useEffect(()=>{
    onSnapshot(receipesCollectionRef,snapshot =>{
      setreceipes(snapshot.docs.map(doc =>{
        return {
          id:doc.id,
          viewing: false,
          ...doc.data()   //breakking individual fields
        }
      }))
   
    })
   },[])
   useEffect(() => {
    onSnapshot(gamesRef, snapshot => {                    
      setGames(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewng: false,
          ...doc.data(),
        }
      }))
    })
  }, []) // added missing dependency array to useEffect hook
  
   const handleSubmit = e=>{
    e.preventDefault()
  if(
    !form.Adname||
    !form.Adtype||
    !form.game||
    !form.duration||
    !form.resolution
  
    ){
    alert("Please fill out all fields")
    return
  }
  addDoc(receipesCollectionRef,form)
  setForm({
    Adname:"",   
    Adtype:"pic",
    game:"",
    duration:"tenDays",
    resolution:"1080*1080",
    tgames:false,
    country:[],
    region:"",
    Status:"pending",
    AdViewCount:"0",
    imageURL: ""
  })
  
  alert("Data sent succecfully")
  }
  

    return(
        <div className="publishAd">
           <Sidebar/>
           <div className="publishAdContainer">
            <Navbar/> 
            <div className="top">
                <h1>Publish Your New Advertisment</h1>
            </div>
            <div className="bottom">
            <Card style={{maxWidth:650,margin:"0 auto",marginTop:"40px",padding:"20px 5px",border:"4px solid #008ac5"}}>
  <CardContent>
    <form onSubmit={handleSubmit}>
    <Grid container spacing={1}>
      <h2>Advertisement Details</h2>
<Grid xs={12} sm={12}  item>
  <TextField label="AdName" placeholder="Enter Ad Name" variant="standard" fullWidth  value={form.Adname} onChange={e=> setForm({...form,Adname:e.target.value})}/>
</Grid>
<Grid xs={12} sm={12}  item>
<FormControl  style={{width: '200px', height: '40px' , textAlign:"left", marginTop:"20px"}}>
      <InputLabel id="adType">Ad Type</InputLabel>
      <Select
        labelId="AdType"
        id="AdType"
        value={form.Adtype}
        variant="standard" 
        onChange={e => setForm({ ...form, Adtype: e.target.value })}
      >
       {[
          { value: 'pic', label: 'Picture' },
          { value: 'vid', label: 'Video' },
        ].map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
</Grid>
<Grid xs={12} sm={12}  item>
<FormControl  style={{width: '200px', height: '40px' ,textAlign:"left", marginTop:"20px",marginBottom:"20px"}}>
      <InputLabel id="duration">Duration</InputLabel>
      <Select
        labelId="duration"
        id="duration"
        variant="standard" 
        value={form.duration}
        onChange={e => setForm({ ...form, duration: e.target.value })}
      >
       {[
          { value: 'tenDays', label: '10 days' },
          { value: 'twebtyDays', label: '20 days' },
          { value: 'thirtyDays', label: '30 days' },
          { value: 'fourtyDays', label: '40 days' },
        ].map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
<Grid xs={12} sm={12}  item>
<FormControl  style={{width: '200px', height: '40px', marginTop: "10px", textAlign: 'left',marginRight:"30px"}}>
      <InputLabel id="res">Resolution</InputLabel>
      <Select
        labelId="res"
        id="res"
        variant="standard" 
        value={form.resolution}
        onChange={e => setForm({ ...form,resolution: e.target.value })}
      >
    {[
          { value: '1080*1080', label: '1080*1080 px' },
          { value: '1280*720', label: '1280*720 px' },
          { value: '1920*1080', label: '1920*1080 px' },
          
        ].map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
</Grid>
</Grid>
<Grid xs={12} sm={6}  item>
<FormControl style={{ width: '200px',textAlign: 'left', marginTop: '20px' }}>
              <InputLabel id="game">Game</InputLabel>
              <Select
                labelId="game"
                id="game"
                variant="standard" 
                value={form.game}
                onChange={(e) => setForm({ ...form, game: e.target.value })}
                renderValue={(selected) => selected === '' ? 'Select A Game' : selected}
              >
                <MenuItem value="">Select A Game</MenuItem>
                {form.tgames 
                  ? gameDetails
                    .sort((a, b) => a.rank - b.rank)
                    .slice(0, 2)
                    .map((option,index) => (
                      <MenuItem key={option.value} value={option.game_name}>
                        {option.game_name}
                      </MenuItem>
                    ))
                  : gameDetails.map((option) => (
                      <MenuItem key={option.value} value={option.game_name}>
                        {option.game_name}
                      </MenuItem>
                    ))
                }
              </Select>
            </FormControl>
</Grid>
<Grid xs={12} sm={6}  item>

  <FormControl style={{ marginTop: '20px',width:'100%',marginTop:"40px",marginLeft:"14px"}}>
  <FormControlLabel control={<Checkbox size="small" style={{ fontSize: 10, padding: 4 }}/>} label="Trending Games"checked={form.tgames} 
     onChange={e => setForm({...form, tgames: !form.tgames})}  />
  </FormControl>

</Grid>
<Grid xs={12} sm={12}  item>

      <FormControl>
      <div>
        <h5 style={{padding:"10px",marginTop:"10px"}}>Select Countries</h5>
        <Multiselect style={{width: '300px', textAlign: 'left', marginTop: '25px'}}options={options} displayValue="Country" value={form.country}
        onChange={(e) => setForm({ ...form, country: e.target.value })}
        variant="standard" />
    </div>
      </FormControl>
     
</Grid>
<div>  
      {selectedImageURL && <img src={selectedImageURL} alt="Selected" />}
      <Grid>
      <ImageUploader onImageSelect={handleImageSelect} onImageUpload={handleImageUpload} />
      </Grid>
</div>
  
    <Grid style={{marginTop:"30px",marginLeft:"400px"}}>
    <Button  variant="contained" background-color="#008ac5"  type="submit" onClick={handleSubmit}>Pay Now<br></br></Button>
    </Grid>
    </Grid>

    </form>
  </CardContent>
  
</Card>

            </div>
           </div>
           </div>
    )

}

export default PublishAd;