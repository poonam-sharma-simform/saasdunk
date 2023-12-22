import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const FAQ = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
          <Typography variant="h5" style={{ fontWeight: "700" }}>
          Frequently Asked Question
          </Typography>
         
<br />
      <br />
      <br />
      <div className={classes.cardSection}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="1"
          id="1"
        >
          <Typography>How to get started?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="2"
          id="2"
        >
          <Typography>Can I make special pricing package?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes there is a special pricing package for large team number and enterprise. Feel free to leave us a message to talk about it!
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </div>
    </div>
  );
};

export default FAQ;
