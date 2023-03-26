import { Card, CardContent, Grid, Select, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem ,FormControl,InputLabel} from "@material-ui/core";
import { margin } from "@mui/system";
import React from "react";
import { db } from "../../Custfirebase.config"
import { useState, useEffect} from "react"
import { collection, onSnapshot, addDoc,orderBy,query, limit} from "firebase/firestore"
//import Image from "../../Custimage"
import { CountryDropdown, RegionDropdown} from "react-country-region-selector"

function CusForm(){
  const [receipes,setreceipes]=useState([]) //because the receipes are in an array
  const [gameDetails, setGames] = useState([])
  const gamesRef = collection(db, "GamesCollection");
  const [form,setForm]=useState({     //display
   Adname:"",   
   Adtype:"",
   game:"",
   duration:"",
   resolution:"",
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
<div>
<Card style={{maxWidth:450,margin:"0 auto",marginTop:"60px",padding:"20px 5px",border:"4px solid #008ac5"}}>
  <CardContent>
    <form onSubmit={handleSubmit}>
    <Grid container spacing={1}>
      <h3>Advertisem Details</h3>
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
<FormControl style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
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
</Grid>
<Grid xs={12} sm={6}  item>

  <FormControl style={{ marginTop: '20px',width:'100%',marginTop:"40px",marginLeft:"14px"}}>
  <FormControlLabel control={<Checkbox size="small" style={{ fontSize: 10, padding: 4 }}/>} label="Trending Games"checked={form.tgames} 
     onChange={e => setForm({...form, tgames: !form.tgames})}  />
  </FormControl>

</Grid>
<Grid xs={12} sm={12}  item>
<FormControl >
<CountryDropdown style={{ width: '200px', textAlign: 'left', marginTop: '20px'}}
        value={form.country}
        onChange={(val) => setCountryAndRegion(val, form.region)}
        variant="standard" 
      />
      <RegionDropdown style={{ width: '200px', textAlign: 'left', marginTop: '1px' }}
        country={form.country}
        value={form.region}
        onChange={(val) => setCountryAndRegion(form.country, val)}
      />
      </FormControl>
</Grid>
    </Grid>
    <Grid style={{marginTop:"30px",marginLeft:"260px"}}>
    <Button  variant="contained" background-color="#008ac5"  type="submit" onClick={handleSubmit}>Pay Now<br></br></Button>
    </Grid>
    </form>
  </CardContent>
  
</Card>
    </div>
    </div>
  )

}

export default CusForm