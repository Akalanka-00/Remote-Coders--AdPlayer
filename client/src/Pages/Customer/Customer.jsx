
import React, {Component} from 'react'
import { Routes,Route,NavLink,BrowserRouter } from 'react-router-dom';

import CusForm from '../../Component/CustomerPages/form/Custform';
import Dashboard from '../../Component/CustomerPages/dashboard/dashboard';
import Profile from '../../Component/CustomerPages/profile/profile';
import Editprofile from '../../Component/CustomerPages/profile/editprofile';
import ViewAd from '../../Component/CustomerPages/adcollection/viewAd';
import ButtonAppBar from '../../Component/CustomerPages/navbar/navbar';
import GameDetail from '../../Component/CustomerPages/gamedetails/gamedetail';
import DragDropFiles from '../../Component/CustomerPages/form/dragdrop';
class Customer extends Component {
  render(){
  return (
    
   
      <BrowserRouter>
      <header>
       
      </header>
      <main>
        <Routes>
          <Route path="/CusForm" index element={<CusForm/>}/>
          <Route path="/Dashboard" index element={<Dashboard/>}/>
          <Route path="/Profile" index element={<Profile/>}/>
          <Route path="/Editprofile" index element={<Editprofile/>}/>
          <Route path="/GameDetail" index element={<GameDetail/>}/>
          <Route path="/Cuspayment" index element={<Cuspayment/>}/>
          <Route path="/ViewAd" index element={<ViewAd/>}/>
          <Route path="/GameDetail" index element={<GameDetail/>}/>
          <Route path="/DragDropFiles" index element={<DragDropFiles/>}/>
        </Routes>
        <ButtonAppBar></ButtonAppBar>
       
      </main>
    </BrowserRouter>
  );
}
}

export default Customer;

