import { db } from "../../Custfirebase.config"
import React,{ useState, useEffect} from "react"
import { collection, onSnapshot, addDoc,orderBy,query, limit} from "firebase/firestore"
import './custFormStyle.css'
import Image from "../../Custimage"
import { CountryDropdown, RegionDropdown} from "react-country-region-selector"
import { NavLink } from "react-router-dom"
import { Button,TextField,Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

function CusForm() {
  const [receipes,setreceipes]=useState([]) //because the receipes are in an array
  const [gameDetails, setGames] = useState([])
  const gamesRef = collection(db, "GamesCollection");
  const [form,setForm]=useState({     //display
   Adname:"",   
   Adtype:"pic",
   game:"",
   duration:"tenDays",
   resolution:"1080*1080",
   tgames:false,
   country:"",
   region:"",
   Status:"pending",
   AdViewCount:"0",
})
const receipesCollectionRef=collection(db,"AdData_Collection")

const setCountryAndRegion = (country, region) => {
  setForm({
    ...form,
    country: country,
    region: region
  });
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
  !form.resolution||
  !form.country||
  !form.region
 
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
  country:"",
  region:"",
  Status:"pending",
  AdViewCount:"0"
})

alert("Data sent succecfully")
}

return(
<div className="App"> 
  <div className="Adformbox">
        <div className="AdformTitle">
             <h2 style={{textAlign:"center"}}>Publish Your Advertisement</h2>
        </div>
  <form onSubmit={handleSubmit}>
     {/* AdName */}   
      <div class="form-group left-align" style={{textAlign:"left"}}>
            <TextField variant="outlined" label="Advertisement Name"  value={form.Adname} onChange={e=> setForm({...form,Adname:e.target.value})}
            style={{width:"70%"}} />
      </div>
{/* Adtype */}

<div className="left-align">
    <Box sx={{ display: 'flex', marginTop: '40px',marginLeft:"200px", minWidth: 20 }} >
<FormControl  style={{ width: '55%', textAlign:"left", marginTop:"1px"}}>
      <InputLabel id="adType">Ad Type</InputLabel>
      <Select
        labelId="AdType"
        id="AdType"
        value={form.Adtype}
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
    </Box>
  </div>
  <div className="left-align">
 {/* Duration */}
    <Box sx={{ display: 'flex', marginTop: '40px',marginLeft:"200px", minWidth: 20 }} >
<FormControl  style={{ width: '55%', textAlign:"left", marginTop:"1px"}}>
      <InputLabel id="duration">Duration</InputLabel>
      <Select
        labelId="duration"
        id="duration"
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
    </Box>
    </div>
    <div className="left-align">
    <Box sx={{ display: 'flex', marginTop: '40px',marginLeft:"200px", minWidth: 20 }} >
<FormControl  style={{ width: '55%', textAlign:"left", marginTop:"1px"}}>
      <InputLabel id="res">Resolution</InputLabel>
      <Select
        labelId="res"
        id="res"
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
    </Box>
    
</div>
  {/* Game */}
      <div className='left-align'>
          <Box sx={{ display: 'flex', marginTop: '40px', marginLeft: '200px', minWidth: 20 }}>
            <FormControl style={{ width: '50%', textAlign: 'left', marginTop: '1px' }}>
              <InputLabel id="game">Game</InputLabel>
              <Select
                labelId="game"
                id="game"
                value={form.game}
                onChange={(e) => setForm({ ...form, game: e.target.value })}
                renderValue={(selected) => selected === '' ? 'Select A Game' : selected}
              >
                <MenuItem value="">Select A Game</MenuItem>
                {form.tgames 
                  ? gameDetails
                    .sort((a, b) => a.rank - b.rank)
                    .slice(0, 2)
                    .map((option) => (
                      <MenuItem key={option.value} value={option.Name}>
                        {option.Name}
                      </MenuItem>
                    ))
                  : gameDetails.map((option) => (
                      <MenuItem key={option.value} value={option.Name}>
                        {option.Name}
                      </MenuItem>
                    ))
                }
              </Select>
            </FormControl>
          </Box>

     </div>


    <div className="right-align">
<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">View Count</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="less_than_100" control={<Radio />} label="Less than 1000" onChange={e=> setForm({...form,viewCount:e.target.value})}/>
        <FormControlLabel value="100_200" control={<Radio />} label="1000-2000" onChange={e=> setForm({...form,viewCount:e.target.value})}/>
        <FormControlLabel value="more_than_200" control={<Radio />} label="Morethan 2000" onChange={e=> setForm({...form,viewCount:e.target.value})}/>
      </RadioGroup>
    </FormControl>
    
    </div>
    

   {/* Resolution */}


{/* Trending Games */}
<div>
     <FormGroup  className="right-align">
      <FormControlLabel control={<Checkbox/>} label="Trending Games"checked={form.tgames} 
     onChange={e => setForm({...form, tgames: !form.tgames})}  />
     </FormGroup>
</div>

{/*country and region*/}
<div className="form-group">
  <label>Country and Region</label>
<div className="drpdwn">
<CountryDropdown
        value={form.country}
        onChange={(val) => setCountryAndRegion(val, form.region)}
      />
      <RegionDropdown
        country={form.country}
        value={form.region}
        onChange={(val) => setCountryAndRegion(form.country, val)}
      />
</div>
</div>
 
{/*View Count */}




{/* Upload Picture */}
<div>
<Image/>
</div>
<div style={{ marginTop:"30px",marginLeft:"650px"}}>
  <Button variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>
</div>

<div style={{ marginTop:"30px",marginLeft:"650px"}}>
  <Button  variant="contained"  type="submit"><NavLink to="/Cuspayment">Pay Now</NavLink><br></br></Button>
</div>
</form>
  </div>
  </div>
)

}



  

export default CusForm;
