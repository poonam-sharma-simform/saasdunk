import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  header_img: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    border: "2px solid #fff",
  },
  header_left: {
    width: "35%",
  },
  header_right: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
    justifyContent: "center",
  },
});

const Header = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={className}>
      <div className={classes.header_left}>
        <TextField
          hiddenLabel
          size="small"
          id="outlined-basic"
          label="Search"
          style={{ width: "100%" }}
          variant="outlined"
        />
      </div>
      <div className={classes.header_right}>
        <NotificationsIcon />
        <img
          className={classes.header_img}
          src={require("../../assets/images/c1.jpg")}
          alt="Customer1"
        />
      </div>
    </div>
  );
};

export default Header;
