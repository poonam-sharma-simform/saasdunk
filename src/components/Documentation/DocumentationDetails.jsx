import React from "react";
import { Card, CardContent, Divider, Typography } from "@material-ui/core";

const DocumentationDetails = ({ className }) => {
  return (
    <Card className={className}>
      <CardContent>
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          Get Started
        </Typography>
        <br />
        <Typography
          variant="body2"
          component="span"
          style={{ color: "#242F57" }}
        >
          React is a JavaScript library for building user interfaces. Learn what
          React is all about on our homepage or in the tutorial.
          <ul style={{ padding: "16px" }}>
            <li>Try React</li>
            <li>Learn React</li>
            <li>Staying Informed</li>
            <li>Versioned Documentation</li>
            <li>Something Missing?</li>
          </ul>
        </Typography>
        <Divider light style={{ width: "100%" }} />
        <br />
        <Typography variant="h6">Try React</Typography>
        <br />
        <Typography
          variant="body2"
          component="span"
          style={{ color: "#242F57" }}
        >
          React has been designed from the start for gradual adoption, and you
          can use as little or as much React as you need. Whether you want to
          get a taste of React, add some interactivity to a simple HTML page, or
          start a complex React-powered app, the links in this section will help
          you get started.
        </Typography>
        <br />
        <br />
        <Divider light style={{ width: "100%" }} />
        <br />
        <Typography variant="h6">Try React</Typography>
        <br />
        <Typography
          variant="body2"
          component="span"
          style={{ color: "#242F57" }}
        >
          People come to React from different backgrounds and with different
          learning styles. Whether you prefer a more theoretical or a practical
          approach, we hope you’ll find this section helpful.
          <ul style={{ padding: "16px" }}>
            <li>
              If you prefer to learn by doing, start with our practical
              tutorial.
            </li>
            <li>
              If you prefer to learn concepts step by step, start with our guide
              to main concepts.
            </li>
            <li>
              Like any unfamiliar technology, React does have a learning curve.
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DocumentationDetails;
