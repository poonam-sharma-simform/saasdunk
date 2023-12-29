import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  accordionGroup: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
    "& .MuiAccordion-rounded, .MuiAccordion-rounded:first-child, .MuiAccordion-rounded:last-child":
      {
        borderRadius: theme.spacing(0.5),
      },
    "& .MuiAccordion-root:before": {
      backgroundColor: "#fff",
    },
    "& .MuiAccordion-root.Mui-expanded": {
      margin: 0,
    },
  },
  content: {
    gridArea: "content",
    overflow: "auto",
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
  },
  cardSection: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(4),
  }
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
      <br/>
      <Typography variant="h5" style={{ fontWeight: "700", color: "#636E95" }}>
        Getting Started
      </Typography>
      <br />
      <br />
      <div className={classes.cardSection}>
        <div className={classes.accordionGroup}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="2"
              id="2"
            >
              <Typography>How does it work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes there is a special pricing package for large team number and
                enterprise. Feel free to leave us a message to talk about it!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="3"
              id="3"
            >
              <Typography>What are the payment methods available?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes there is a special pricing package for large team number and
                enterprise. Feel free to leave us a message to talk about it!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={classes.accordionGroup}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="1"
              id="1"
            >
              <Typography>Can I make special pricing package?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes there is a special pricing package for large team number and
                enterprise. Feel free to leave us a message to talk about it!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="2"
              id="2"
            >
              <Typography>
                Can I cancel the subscription plan midway?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <br />
      <br />
      <br/>
      <Typography variant="h5" style={{ fontWeight: "700", color: "#636E95" }}>
        Installation
      </Typography>
      <br />
      <br />
      <div className={classes.cardSection}>
        <div className={classes.accordionGroup}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="1"
              id="1"
            >
              <Typography>What are the requirements?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="2"
              id="2"
            >
              <Typography>
                What are the mininum specifications required?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes there is a special pricing package for large team number and
                enterprise. Feel free to leave us a message to talk about it!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="3"
              id="3"
            >
              <Typography>
                Does it require internet connection during installation?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes there is a special pricing package for large team number and
                enterprise. Feel free to leave us a message to talk about it!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={classes.accordionGroup}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="1"
              id="1"
            >
              <Typography>How to download all at a time?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes there is a special pricing package for large team number and
                enterprise. Feel free to leave us a message to talk about it!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="2"
              id="2"
            >
              <Typography>How long is the refund period?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="3"
              id="3"
            >
              <Typography>How much memory space required?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
