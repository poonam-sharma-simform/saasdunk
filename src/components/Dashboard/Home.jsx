import { Card, CardContent, Divider, makeStyles, Typography } from "@material-ui/core";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";
import { ChartContainer, BarPlot } from "@mui/x-charts";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#9390F3" : "#EAEDF7",
  },
}));

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const useStyles = makeStyles((theme) => ({
  bottomContent: {
    display: "grid",
    gap: theme.spacing(3),
    gridTemplateAreas: `
      "marketing userReport"
      "marketing members"
    `,
    gridTemplateColumns: "1fr min-content",
    gridTemplateRows: "min-content 1fr",
  },
  marketingCard: {
    gridArea: "marketing",
  },
  userReportCard: {
    gridArea: "userReport",
  },
  membersCard: {
    gridArea: "members",
  },
  bottomChartContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    gap: theme.spacing(10),
    marginTop: theme.spacing(2),
  },
  bottomChartDetails: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  content: {
    gridArea: "content",
    overflow: "auto",
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(10),
    paddingTop: theme.spacing(4),
  },
  chartValue: {
    fontWeight: "700",
    lineHeight: "28px",
    letterSpacing: "0.5px",
    textAlign: "center",
    paddingBottom: theme.spacing(1.5),
  },
  chartPercentageInfo: {
    color: "#05cd9f",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "17px",
    letterSpacing: "0.5px",
    textAlign: "center",
  },
  topContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
       <Typography variant="h5" style={{ fontWeight: "700" }}>
       Dashboard
            </Typography>
            <Typography
              variant="body2"
              component="span"
              style={{ color: "#636E95" }}
            >
              See your data visualization from 27 Feb - 3 Apr 
            </Typography>
            <br />
      <br />      
      <div className={classes.topContent}>
        <Card>
          <CardContent>
            <Typography
              variant="body2"
              component="span"
              style={{ color: "#97A0C3" }}
            >
              Realtime Users
            </Typography>
            <div className={classes.cardContent}>
              <div className={classes.chartDetails}>
                <Typography className={classes.chartValue} variant="h4">
                  553
                </Typography>
                <Typography
                  className={classes.chartPercentageInfo}
                  variant="body2"
                >
                  + 21.1%{" "}
                  <TrendingUpIcon
                    style={{ color: "#05cd9f", fontSize: "0.8rem" }}
                  />
                </Typography>
              </div>
              <div className={classes.chart}>
                <svg
                  width="115"
                  height="57"
                  viewBox="0 0 115 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 50L16.6168 27.9359L21.9776 39.3703L28.7041 42.3401L48.7986 22.0841L60.9346 33.8043L75.5222 1L81.9383 34.1046L88.3062 39.3703L95.8896 27.9359L102.097 36.0421L114 42.3401"
                    stroke="#369AFE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 49.9196L16.6168 27.8917L21.9776 39.3073L28.7041 42.2722L49.4213 22.1193L60.9346 33.7505L75.5222 1L81.9383 34.0503L88.3062 39.3073L95.8896 27.8917L102.097 35.9846L114 42.2722V57H1L1 49.9196Z"
                    fill="url(#paint0_linear_0_220)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_220"
                      x1="251.009"
                      y1="54.2607"
                      x2="251.009"
                      y2="-137.536"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#369AFE" stop-opacity="0.01" />
                      <stop offset="1" stop-color="#369AFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography
              variant="body2"
              component="span"
              style={{ color: "#97A0C3" }}
            >
              Total Visits
            </Typography>
            <div className={classes.cardContent}>
              <div className={classes.chartDetails}>
                <Typography className={classes.chartValue} variant="h4">
                  32.12
                </Typography>
                <Typography
                  className={classes.chartPercentageInfo}
                  variant="body2"
                >
                  + 10.1%
                  <TrendingUpIcon
                    style={{ color: "#05cd9f", fontSize: "0.8rem" }}
                  />
                </Typography>
              </div>
              <div className={classes.chart}>
                <svg
                  width="115"
                  height="57"
                  viewBox="0 0 115 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 50L16.6168 27.9359L21.9776 39.3703L28.7041 42.3401L48.7986 22.0841L60.9346 33.8043L75.5222 1L81.9383 34.1046L88.3062 39.3703L95.8896 27.9359L102.097 36.0421L114 42.3401"
                    stroke="#369AFE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 49.9196L16.6168 27.8917L21.9776 39.3073L28.7041 42.2722L49.4213 22.1193L60.9346 33.7505L75.5222 1L81.9383 34.0503L88.3062 39.3073L95.8896 27.8917L102.097 35.9846L114 42.2722V57H1L1 49.9196Z"
                    fill="url(#paint0_linear_0_220)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_220"
                      x1="251.009"
                      y1="54.2607"
                      x2="251.009"
                      y2="-137.536"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#369AFE" stop-opacity="0.01" />
                      <stop offset="1" stop-color="#369AFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography
              variant="body2"
              component="span"
              style={{ color: "#97A0C3" }}
            >
              Visit Duration
            </Typography>
            <div className={classes.cardContent}>
              <div className={classes.chartDetails}>
                <Typography className={classes.chartValue} variant="h4">
                  1m 8s
                </Typography>
                <Typography
                  className={classes.chartPercentageInfo}
                  variant="body2"
                  style={{ color: "#FA5087" }}
                >
                  -12.1%
                  <TrendingDownIcon
                    style={{ color: "#FA5087", fontSize: "0.8rem" }}
                  />
                </Typography>
              </div>
              <div className={classes.chart}>
                <svg
                  width="115"
                  height="57"
                  viewBox="0 0 115 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 50L16.6168 27.9359L21.9776 39.3703L28.7041 42.3401L48.7986 22.0841L60.9346 33.8043L75.5222 1L81.9383 34.1046L88.3062 39.3703L95.8896 27.9359L102.097 36.0421L114 42.3401"
                    stroke="#369AFE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 49.9196L16.6168 27.8917L21.9776 39.3073L28.7041 42.2722L49.4213 22.1193L60.9346 33.7505L75.5222 1L81.9383 34.0503L88.3062 39.3073L95.8896 27.8917L102.097 35.9846L114 42.2722V57H1L1 49.9196Z"
                    fill="url(#paint0_linear_0_220)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_220"
                      x1="251.009"
                      y1="54.2607"
                      x2="251.009"
                      y2="-137.536"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#369AFE" stop-opacity="0.01" />
                      <stop offset="1" stop-color="#369AFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography
              variant="body2"
              component="span"
              style={{ color: "#97A0C3" }}
            >
              Bounce Rate
            </Typography>
            <div className={classes.cardContent}>
              <div className={classes.chartDetails}>
                <Typography className={classes.chartValue} variant="h4">
                  21.2
                </Typography>
                <Typography
                  className={classes.chartPercentageInfo}
                  variant="body2"
                >
                  + 21.1%{" "}
                  <TrendingUpIcon
                    style={{ color: "#05cd9f", fontSize: "0.8rem" }}
                  />
                </Typography>
              </div>
              <div className={classes.chart}>
                <svg
                  width="115"
                  height="57"
                  viewBox="0 0 115 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 50L16.6168 27.9359L21.9776 39.3703L28.7041 42.3401L48.7986 22.0841L60.9346 33.8043L75.5222 1L81.9383 34.1046L88.3062 39.3703L95.8896 27.9359L102.097 36.0421L114 42.3401"
                    stroke="#369AFE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 49.9196L16.6168 27.8917L21.9776 39.3073L28.7041 42.2722L49.4213 22.1193L60.9346 33.7505L75.5222 1L81.9383 34.0503L88.3062 39.3073L95.8896 27.8917L102.097 35.9846L114 42.2722V57H1L1 49.9196Z"
                    fill="url(#paint0_linear_0_220)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_220"
                      x1="251.009"
                      y1="54.2607"
                      x2="251.009"
                      y2="-137.536"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#369AFE" stop-opacity="0.01" />
                      <stop offset="1" stop-color="#369AFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <br />
      <div className={classes.bottomContent}>
        <Card className={classes.marketingCard}>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: "700" }}>
              Marketing
            </Typography>
            <Typography
              variant="body2"
              component="span"
              style={{ color: "#636E95", paddingBottom: "10px" }}
            >
              See your marketing fluctuative
            </Typography>
            <div className={classes.bottomChartContent}>
              <div>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3" }}
                >
                  New Visitor
                </Typography>
                <div className={classes.bottomChartDetails}>
                  <Typography
                    className={classes.chartValue}
                    variant="h6"
                    style={{ padding: 0 }}
                  >
                    55
                  </Typography>
                  <Typography
                    className={classes.chartPercentageInfo}
                    variant="body2"
                  >
                    + 21.1%
                    <TrendingUpIcon
                      style={{ color: "#05cd9f", fontSize: "0.8rem" }}
                    />
                  </Typography>
                </div>
              </div>
              <div>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3" }}
                >
                  New Customer
                </Typography>
                <div className={classes.bottomChartDetails}>
                  <Typography
                    className={classes.chartValue}
                    variant="h6"
                    style={{ padding: 0 }}
                  >
                    $41,000
                  </Typography>
                  <Typography
                    className={classes.chartPercentageInfo}
                    variant="body2"
                    style={{ color: "#FA5087" }}
                  >
                    + 21.1%
                    <TrendingDownIcon
                      style={{ color: "#FA5087", fontSize: "0.8rem" }}
                    />
                  </Typography>
                </div>
              </div>
              <div>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3" }}
                >
                  Reach
                </Typography>
                <div className={classes.bottomChartDetails}>
                  <Typography
                    className={classes.chartValue}
                    variant="h6"
                    style={{ padding: 0 }}
                  >
                    3241
                  </Typography>
                  <Typography
                    className={classes.chartPercentageInfo}
                    variant="body2"
                    style={{ color: "#FA5087" }}
                  >
                    - 8.01%
                    <TrendingDownIcon
                      style={{ color: "#FA5087", fontSize: "0.8rem" }}
                    />
                  </Typography>
                </div>
              </div>
            </div>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={1200}
              height={390}
            />
          </CardContent>
        </Card>
        <Card className={classes.userReportCard}>
          <CardContent>
            <div style={{display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
            <Typography variant="h6" style={{ fontWeight: "700", paddingBottom: "25px"  }}>
              User Report
            </Typography>
            <Typography variant="body1" component="span" style={{ fontSize: "19px", fontWeight: "700", color:"#9390F3"}}>
              65%
            </Typography>
            </div>
            <BorderLinearProgress variant="determinate" value={50} />
            <Divider light style={{width: "100%"}} />
            <div className={classes.bottomChartContent} style={{marginTop: "40px"}}>
              <div>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3" }}
                >
                  Target
                </Typography>
                <Typography
                  className={classes.chartValue}
                  variant="h6"
                  style={{ padding: 0 }}
                >
                  $4545
                </Typography>
              </div>
              <div>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3" }}
                >
                  Last Month
                </Typography>
                <Typography
                  className={classes.chartValue}
                  variant="h6"
                  style={{ padding: 0 }}
                >
                  $3200
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.membersCard}>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: "700" }}>
              Members
            </Typography>
            <ChartContainer
              width={300}
              height={200}
              series={[{ data: uData, label: "uv", type: "bar" }]}
              xAxis={[{ scaleType: "band", data: xLabels }]}
            >
              <BarPlot />
            </ChartContainer>
            <div className={classes.bottomChartContent}  style={{marginTop: "0px"}}>
              <div>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3"}}
                >
                  Users
                </Typography>
                <Typography
                  className={classes.chartValue}
                  variant="h6"
                  style={{ padding: 0 }}
                >
                  5500
                </Typography>
              </div>
              <div>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3" }}
                >
                  VIP
                </Typography>
                <Typography
                  className={classes.chartValue}
                  variant="h6"
                  style={{ padding: 0 }}
                >
                  3200
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
