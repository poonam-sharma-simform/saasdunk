import {
  Card,
  CardContent,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ShoppingBagIcon from "@material-ui/icons/ShoppingCart";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";
import { PieChart } from "@mui/x-charts";

const budget = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const profit = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY"];

const tableDetails = [
  {
    info: "Galaxy A51",
    type: "Samsung",
    value: "4100",
  },
  {
    info: "Oppo A61",
    type: "Oppo",
    value: "5200",
  },
  {
    info: "Galaxy A72",
    type: "Samsung",
    value: "8500",
  },
  {
    info: "Apple A81",
    type: "Apple",
    value: "6100",
  },
];

const useStyles = makeStyles((theme) => ({
  bottomContent: {
    display: "grid",
    gap: theme.spacing(3),
    gridTemplateAreas: `
      "sales sales"
      "topSellingProduct customer"
    `,
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gridTemplateRows: "min-content 1fr",
  },
  salesard: {
    gridArea: "sales",
  },
  topSellingProductCard: {
    gridArea: "topSellingProduct",
  },
  customerCard: {
    gridArea: "customer",
  },
  bottomChartContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: theme.spacing(30),
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
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: theme.spacing(6),
    paddingTop: theme.spacing(2),
  },
  info: {
    fontWeight: "600",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    fontSize: "14px",
    textAlign: "left",
  },
  value: {
    color: "#05cd9f",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "17px",
    letterSpacing: "0.5px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  tableRow: {
    "&:last-child td, &:last-child th": { border: 0 },
  },
  topContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "& .MuiCard-root": {
      width: "300px",
    },
  },
}));

const Marketing = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography variant="h5" style={{ fontWeight: "700" }}>
        Marketing
      </Typography>
      <br />
      <div className={classes.topContent}>
        <Card>
          <CardContent>
            <div className={classes.cardContent}>
              <FavoriteBorderIcon
                style={{ color: "#05cd9f", fontSize: "2rem" }}
              />
              <div className={classes.chartDetails}>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3" }}
                >
                  Engagement
                </Typography>
                <Typography className={classes.chartValue} variant="h6">
                  553
                </Typography>
              </div>
              <div className={classes.chart}>
                <svg
                  width="54"
                  height="58"
                  viewBox="0 0 54 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="8" width="6" height="52" fill="#0080FF" />
                  <rect x="24" y="8" width="6" height="44" fill="#0080FF" />
                  <rect x="16" y="24" width="6" height="28" fill="#C5E2FF" />
                  <rect x="40" y="16" width="6" height="36" fill="#0080FF" />
                  <rect x="32" y="18" width="6" height="34" fill="#C5E2FF" />
                  <rect y="30" width="6" height="22" fill="#C5E2FF" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className={classes.cardContent}>
              <WatchLaterIcon style={{ color: "#2E98FF", fontSize: "2rem" }} />
              <div className={classes.chartDetails}>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3" }}
                >
                  Impression
                </Typography>
                <Typography className={classes.chartValue} variant="h6">
                  32K
                </Typography>
              </div>
              <div className={classes.chart}>
                <svg
                  width="54"
                  height="58"
                  viewBox="0 0 54 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="8" width="6" height="52" fill="#0080FF" />
                  <rect x="24" y="8" width="6" height="44" fill="#0080FF" />
                  <rect x="16" y="24" width="6" height="28" fill="#C5E2FF" />
                  <rect x="40" y="16" width="6" height="36" fill="#0080FF" />
                  <rect x="32" y="18" width="6" height="34" fill="#C5E2FF" />
                  <rect y="30" width="6" height="22" fill="#C5E2FF" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className={classes.cardContent}>
              <TrendingUpIcon style={{ color: "#665CFE", fontSize: "2rem" }} />
              <div className={classes.chartDetails}>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3" }}
                >
                  Sales
                </Typography>
                <Typography className={classes.chartValue} variant="h6">
                  50%
                </Typography>
              </div>
              <div className={classes.chart}>
                <svg
                  width="54"
                  height="58"
                  viewBox="0 0 54 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="8" width="6" height="52" fill="#0080FF" />
                  <rect x="24" y="8" width="6" height="44" fill="#0080FF" />
                  <rect x="16" y="24" width="6" height="28" fill="#C5E2FF" />
                  <rect x="40" y="16" width="6" height="36" fill="#0080FF" />
                  <rect x="32" y="18" width="6" height="34" fill="#C5E2FF" />
                  <rect y="30" width="6" height="22" fill="#C5E2FF" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className={classes.cardContent}>
              <ShoppingBagIcon style={{ color: "#F4A700", fontSize: "2rem" }} />
              <div className={classes.chartDetails}>
                <Typography
                  variant="body2"
                  component="span"
                  style={{ color: "#97A0C3" }}
                >
                  Daily Order
                </Typography>
                <Typography className={classes.chartValue} variant="h6">
                  200
                </Typography>
              </div>
              <div className={classes.chart}>
                <svg
                  width="54"
                  height="58"
                  viewBox="0 0 54 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="8" width="6" height="52" fill="#0080FF" />
                  <rect x="24" y="8" width="6" height="44" fill="#0080FF" />
                  <rect x="16" y="24" width="6" height="28" fill="#C5E2FF" />
                  <rect x="40" y="16" width="6" height="36" fill="#0080FF" />
                  <rect x="32" y="18" width="6" height="34" fill="#C5E2FF" />
                  <rect y="30" width="6" height="22" fill="#C5E2FF" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <br />
      <div className={classes.bottomContent}>
        <Card className={classes.salesard}>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: "700" }}>
              Sales
            </Typography>

            <LineChart
              width={1600}
              height={300}
              series={[
                {
                  data: budget,
                  label: "Budget",
                  area: true,
                  stack: "total",
                  showMark: false,
                },
                {
                  data: profit,
                  label: "Profit",
                  area: true,
                  stack: "total",
                  showMark: false,
                },
              ]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                ".MuiLineElement-root": {
                  display: "none",
                },
              }}
            />
          </CardContent>
        </Card>
        <Card className={classes.topSellingProductCard}>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: "700" }}>
              Top Selling Product
            </Typography>
            <Table aria-label="simple table">
              <TableBody>
                {tableDetails.map((d) => {
                  return (
                    <TableRow className={classes.tableRow} key={d.info}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ color: "#636D96" }}
                      >
                        {d.info}
                      </TableCell>
                      <TableCell align="left" style={{ color: "#97A0C3" }}>
                        {d.type}
                      </TableCell>
                      <TableCell
                        align="right"
                        className={classes.value}
                        style={{ color: "#04B78A" }}
                      >
                        {d.value}
                        <ArrowDropUpIcon style={{ color: "#04B78A" }} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className={classes.customerCard}>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: "700" }}>
              Costumer Age
            </Typography>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: ">24 y.o" },
                    { id: 1, value: 15, label: "20-24 y.o" },
                    { id: 2, value: 20, label: "16-20 y.o" },
                    { id: 3, value: 5, label: "<16 y.o" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Marketing;
