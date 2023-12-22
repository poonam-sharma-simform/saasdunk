import React from "react";
import {
  ListItemIcon,
  makeStyles,
  MenuItem,
  MenuList,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  logo: {
    padding: "20px",
  },
menuList: {
  "& .MuiMenuItem-root":{
      minHeight: "50px",
  },
}
});

const Sidebar = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={className}>
      <div className={classes.logo}>
        <img src={require("../../assets/images/Logo.png")} alt="Customer1" />
      </div>
      <Typography
        variant="body1"
        style={{ fontWeight: "700", padding: "20px", color: "#9FA8C9" }}
      >
        Main
      </Typography>
      <MenuList className={classes.menuList}>
        <MenuItem selected>
          <ListItemIcon>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContactMailIcon fontsize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontsize="small" />
          </ListItemIcon>
        </MenuItem>
      </MenuList>
      <Typography
        variant="body1"
        style={{ fontWeight: "700", padding: "20px", color: "#9FA8C9" }}
      >
        COMMUNICATIONS
      </Typography>
      <MenuList className={classes.menuList}>
        <MenuItem>
          <ListItemIcon>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContactMailIcon fontsize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontsize="small" />
          </ListItemIcon>
        </MenuItem>
      </MenuList>
      <Typography
        variant="body1"
        style={{ fontWeight: "700", padding: "20px", color: "#9FA8C9" }}
      >
        PAGES
      </Typography>
      <MenuList className={classes.menuList}>
        <MenuItem>
          <ListItemIcon>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContactMailIcon fontsize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontsize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontsize="small" />
          </ListItemIcon>
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default Sidebar;
