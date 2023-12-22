import React from "react";
import { makeStyles, TextField, Typography } from "@material-ui/core";
import Navigation from "./Navigation";
import DocumentationDetails from "./DocumentationDetails";
import AdditionalResources from "./AdditionalResources";

const useStyles = makeStyles((theme) => ({
  content: {
    gridArea: "content",
    overflow: "auto",
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
  },
  cardTitleSection: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardSection: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(4),
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
  },
  rightSide: {},
}));

const Documentation = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <br />
      <div className={classes.cardTitleSection}>
        <div>
          <Typography variant="h5" style={{ fontWeight: "700" }}>
            Documentation
          </Typography>
          <Typography
            variant="body2"
            component="span"
            style={{ color: "#636E95" }}
          >
            Knowledge documentation for all purpose
          </Typography>
        </div>
        <TextField
          id="filled-size-small"
          placeholder="Search"
          style={{ width: 300 }}
        />
      </div>
<br />
      <br />
      <br />
      <div className={classes.cardSection}>
        <div className={classes.leftSide}>
          <Navigation />
          <AdditionalResources />
        </div>
        <div className={classes.rightSide}>
          <DocumentationDetails />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
