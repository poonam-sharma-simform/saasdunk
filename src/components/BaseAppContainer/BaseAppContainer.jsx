import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from "react";

const useStyles = makeStyles({
  content: {
    backgroundColor: "#F4F7FC",
    display: "flex",
    flexDirection: "column",
    gridArea: "content",
    height: "93vh",
    overflowX: "hidden",
    overflowY: "auto",
    position: "relative",
    scrollBehavior: "smooth",
  },
  navbar: {
    display: "flex",
    gridArea: "navbar",
    justifyContent: "space-between",
    alignItems: "center",
    height: "7vh",
    padding: "0px 30px",
  },
  root: {
    display: "grid",
    gridTemplateAreas: `
      "sidebar navbar"
      "sidebar content"
    `,
    gridTemplateColumns: "min-content 1fr",
    gridTemplateRows: "min-content 1fr",
    height: "100%",
  },
  sidebar: {
    gridArea: "sidebar",
    minWidth: "60px",
    overflow: "hidden",
  },
});

const BaseAppContainer = ({ children }) => {
  const classes = useStyles();
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    console.log("toggle sidebar clicked here");
    setShowSidebar(!showSidebar);
  };

  return (
      <div className={classes.root}>
        <Header
          className={classes.navbar}
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        />
        {showSidebar && <Sidebar className={classes.sidebar} />}
        <div className={classes.content}>{children}</div>
      </div>
  );
};

export default BaseAppContainer;
