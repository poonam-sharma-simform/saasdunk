import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Typography } from '@material-ui/core';
import NearMeIcon from '@material-ui/icons/NearMe';
import PaymentIcon from '@material-ui/icons/Payment';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import WebAssetIcon from '@material-ui/icons/WebAsset';

export default function Navigation({className}) {
  return (
    <Paper className={className} sx={{ width: 320, maxWidth: '100%' }}>
       <Typography variant="h6" style={{ fontWeight: "700", padding: "20px"  }}>
       Navigation
            </Typography>
      <MenuList>
        <MenuItem selected>
          <ListItemIcon>
            <NearMeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Get Started</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PaymentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Payments</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsApplicationsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Advanced Tools</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <WebAssetIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Other</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}