import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Typography } from '@material-ui/core';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DownloadIcon from '@material-ui/icons/FontDownload';

export default function AdditionalResources({className}) {
  return (
    <Paper className={className} sx={{ width: 320, maxWidth: '100%' }}>
       <Typography variant="h6" style={{ fontWeight: "700", padding: "20px"  }}>
       Additional Resources
            </Typography>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <AccountBoxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Community</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DownloadIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Download</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}