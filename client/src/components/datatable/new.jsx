import React from "react";
import "./datatable.scss"
import { db } from "../../firebase";
import { useEffect, useState } from 'react';
import { doc,onSnapshot, collection} from "firebase/firestore" 
import { query,where } from "firebase/firestore";
import { Table, TableBody, TableCell, TableHead, TableRow,TableContainer,Paper,Button} from '@mui/material';
import useFetch from "../../hook/Fetch";

function TableHeader(){
    return(
      <TableRow>
      <TableCell style={{ padding: "30px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Advertisement Name</TableCell>
      <TableCell style={{ padding: "30px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Game Name</TableCell>
      <TableCell style={{ padding: "30px", fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>View Count</TableCell>
    </TableRow>
    )}
  
  function MyTable({apiData}){
    return(
      <Table>
      <TableHead>
      <TableHeader/>
    </TableHead>
    <TableBody>
    {apiData.map((data, i) => (
            <TableRow key={data.id || i}>
              <TableCell style={{ padding: "10px",paddingLeft:"40px" }}>{data.name}</TableCell>
              <TableCell style={{ padding: "10px",paddingLeft:"40px"}}>{data.price}</TableCell>
              <TableCell style={{ padding: "10px",paddingLeft:"40px"}}>{data.status}</TableCell>
            </TableRow>
      ))}
    </TableBody>
  </Table>
    )}

const Datatable=()=>{

    const [data, setData] = useState([]);
    const[rejected,setrejected]=useState([]);
    const[pending,setpending]=useState([]);

    const AdCollectionRef = collection(db,"AdData_Collection");
    const q1 = query(AdCollectionRef, where("Status", "==", "Approved"));
    const q2 = query(AdCollectionRef, where("Status", "==", "Rejected"));
    const q3 = query(AdCollectionRef, where("Status", "==", "pending"));
    const [ApprovedAdTable, setApprovedAdTable] = useState(true);
    const handleApprovedAdTable = () => {
      setApprovedAdTable(true);
      setPendingAdTable(false);
      setRejectedAdTable(false);
    };
    const [PendingAdTable, setPendingAdTable] = useState(false);
    const handlePendingAdTable = () => {
      setApprovedAdTable(false);
      setPendingAdTable(true);
      setRejectedAdTable(false);
    };
    const [RejectedAdTable, setRejectedAdTable] = useState(false);
    const handleRejectedAdTable = () => {
      setPendingAdTable(false);
      setApprovedAdTable(false);
      setRejectedAdTable(true);
    };
    const [{ isLoading, apiData, serverError }] = useFetch({

      query: `getCustomerAdsData/`,
  
      reqData: null,
  
      method: "get",
  
    });
    useEffect(() => {
        onSnapshot(q1,snapshot => {
            setData(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()   //breaking individual fields
                }
            }))
          })
    }, [])
    useEffect(() => {
        onSnapshot(q2,snapshot => {
            setrejected(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()   //breaking individual fields
                }
            }))
          })
    }, [])
    useEffect(() => {
        onSnapshot(q3,snapshot => {
            setpending(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()   //breaking individual fields
                }
            }))
          })
    }, [])

 return(
    <div className="datatable">
          <div style={{ display: 'flex',margin:"20px"}}>
  <Button variant="contained" onClick={handleApprovedAdTable} style={{marginRight: '20px',backgroundColor: 'rgb(0,102,204)'}}>On Going Ads</Button>
  <Button variant="contained" onClick={handlePendingAdTable} style={{ marginRight: '10px',backgroundColor: 'rgb(0,102,204)' }}>Pending Ads</Button>
  <Button variant="contained" onClick={handleRejectedAdTable} style={{ marginLeft: '10px',backgroundColor: 'rgb(0,102,204)' }}>Rejected Ads</Button>
</div>

{data.length ? (
  <TableContainer >
    {ApprovedAdTable && <MyTable filteredAd={data}/>}
  </TableContainer>
) : (
  <>{ApprovedAdTable && <p><h3>There's no Approved Ads yet</h3></p>}</>
)}
     
{pending.length ? (
  <TableContainer >
    {PendingAdTable && <MyTable filteredAd={pending}/>}
  </TableContainer>
) : (
  <>{PendingAdTable && <p><h3>There's no Pending Ads yet</h3></p>}</>
)}
{rejected.length ? (
  <TableContainer >
    {RejectedAdTable && <MyTable filteredAd={rejected}/>}
  </TableContainer>
) : (
  <>{RejectedAdTable && <p><h3>There's no Rejected Ads yet</h3></p>}</>
)}
</div>
  
 )   
}
export default Datatable;