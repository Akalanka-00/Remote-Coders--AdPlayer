import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './sidebar';
import Dashboard from '../dashboard/dashboard';
import Profile from '../profile/profile';
import CusForm from '../form/Custform';
import ViewAd from '../adcollection/viewAd';
import GameDetail from '../gamedetails/gamedetail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavLink} from 'react-router-dom';

export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const menuItems = [
    { text: 'Dashboard', to: '/dashboard', component: <Dashboard /> },
    { text: 'Profile', to: '/profile', component: <Profile /> },
    { text: 'CusForm', to: '/CusForm', component: <CusForm/> },
    { text: 'ViewAd', to: '/viewad', component: <ViewAd /> },

    { text: 'Tables', to: '/GameDetail', component: <GameDetail /> },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', height: '40px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,marginBottom:"20px",color:"#333333" }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:"20px", marginBottom:"17px",color:"#333333"}}>
            Voasiz
          </Typography>
          <Button color="inherit" sx={{fontSize:"10px", marginBottom:"17px",color:"purple"}}><nav><NavLink to="/Profile">Profile</NavLink></nav></Button>
          <Button sx={{marginBottom:"17px",color:"purple"}}><NotificationsIcon/></Button>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer 
        setState={setState} 
        toggleDrawer={toggleDrawer}
        state={state}
        menuItems={menuItems}
      />
    </Box>
  );
}
