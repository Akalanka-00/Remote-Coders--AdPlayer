import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PublishIcon from '@mui/icons-material/Publish';
import SourceIcon from '@mui/icons-material/Source';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AnalyticsIcon from '@mui/icons-material/Analytics';

import { NavLink} from 'react-router-dom';


export default function TemporaryDrawer({ state, setState, toggleDrawer }) {
    const icons = [
      <DashboardIcon />,
      <AccountCircleIcon />,
      <PublishIcon />,
      <SourceIcon />,
      <MonetizationOnIcon />,
      <AnalyticsIcon />,
    ];
  
    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
    <List>
        <ListItem key="Dashboard" disablePadding sx={{ my: 2,color:"#7451f8" }}>
            <ListItemButton component={NavLink} to="/dashboard">
              <ListItemIcon sx={{color:"#7451f8"}}>
                <DashboardIcon />
              </ListItemIcon>
            <ListItemText primary="Dashboard" />
            </ListItemButton>
        </ListItem>
        <ListItem key="Profile" disablePadding sx={{ my: 2,color:"#7451f8"  }}>
            <ListItemButton component={NavLink} to="/Profile">
              <ListItemIcon sx={{color:"#7451f8"}}>
                <AccountCircleIcon />
              </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
        <ListItem key="Publish Ad" disablePadding sx={{ my: 2,color:"#7451f8"  }}>
            <ListItemButton component={NavLink} to="/Form">
              <ListItemIcon sx={{color:"#7451f8"}}>
                <PublishIcon />
              </ListItemIcon>
              <ListItemText primary="Publish Ad" />
            </ListItemButton>
        </ListItem>
        <ListItem key="View Ad" disablePadding sx={{ my: 2,color:"#7451f8"  }}>
              <ListItemButton component={NavLink} to="/viewAd">
                <ListItemIcon sx={{color:"#7451f8"}}>
                  <SourceIcon />
                </ListItemIcon>
                <ListItemText primary="View Ad" />
              </ListItemButton>
        </ListItem>
        <ListItem key="Pricing" disablePadding sx={{ my: 2,color:"#7451f8"  }}>
             <ListItemButton component={NavLink} to="/Tables">
                <ListItemIcon sx={{color:"#7451f8"}}>
                  <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Pricing" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      );
      
  
    return (
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }
  