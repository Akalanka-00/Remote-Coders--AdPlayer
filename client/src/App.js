
import React, {Component} from 'react'
import CusForm from './CustomerPages/form/Custform';
import { Routes,Route,NavLink,BrowserRouter } from 'react-router-dom';
import Dashboard from './CustomerPages/dashboard/dashboard.js';
import Profile from './CustomerPages/profile/profile';
import Editprofile from './CustomerPages/profile/editprofile';
import GameDetail from './CustomerPages/gamedetails/gamedetail';

import ViewAd from './CustomerPages/adcollection/viewAd';
import Form from './CustomerPages/form/form';
import ButtonAppBar from './CustomerPages/navbar/navbar';
import Tables from './CustomerPages/table/table';
import DragDropFiles from './CustomerPages/form/dragdrop';
class App extends Component {
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
        
          <Route path="/ViewAd" index element={<ViewAd/>}/>
          <Route path="/Form" index element={<Form/>}/>
          <Route path="/Tables" index element={<Tables/>}/>
          <Route path="/DragDropFiles" index element={<DragDropFiles/>}/>
        </Routes>
        <ButtonAppBar></ButtonAppBar>
       
      </main>
    </BrowserRouter>
  );
}
}

export default App;
