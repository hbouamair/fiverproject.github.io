import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import BackupTwoToneIcon from "@material-ui/icons/BackupTwoTone";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import TableHead from "@material-ui/core/TableHead";
import TextField from "@material-ui/core/TextField";
import TableRow from "@material-ui/core/TableRow";
import HSBar from "react-horizontal-stacked-bar-chart";
import "./dash.css";
import { Box } from "@material-ui/core";
import data1 from "../Data/globaldashboard.json";
import data2 from "../Data/newsdashboard.json";
import MaterialTable from "material-table";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    boxShadow: "15px  #a1a9b4",
    borderRadius: 10,
    padding: theme.spacing(2),
    textAlign: "center",
  },
  paper1: {
    boxShadow: "15px  #a1a9b4",
    borderRadius: 10,
    padding: theme.spacing(4),
    textAlign: "center",
  },
}));

export default function CenteredGrid() {
  const DisplayData2 = () => {
    if (data2.length == 0) {
      return <p> aucune post </p>;
    } else {
      return data2.map((post2) => {
        return (
          <TableRow>
            <TableCell>{post2.date}</TableCell>

            <TableCell
              style={{
                textAlign: "center",
              }}
            >
              {(() => {
                switch (post2.type) {
                  case "upload":
                    return <BackupTwoToneIcon />;
                  case "comment":
                    return <ModeCommentIcon />;
                  case "validated":
                    return <CheckBoxIcon />;
                }
              })()}
            </TableCell>
            <TableCell> {post2.information}</TableCell>
          </TableRow>
        );
      });
    }
  };

  const DisplayData1 = () => {
    if (data1.length == 0) {
      return <p> aucune post </p>;
    } else {
      return data1.map((post) => {
        let val1 = post.one_thing;

        let val2 = post.two_thing;
        let val3 = post.three_thing;
        let pour = Math.round(post.on_time * 100);

        return (
          <TableRow>
            <TableCell>{post.name}</TableCell>
            <TableCell>
              {(() => {
                if (val1 == 0) {
                  val1 = 0.0001;
                } else if (val2 == 0) {
                  val2 = 0.0001;
                }
              })()}{" "}
              <HSBar
                data={[
                  { value: val1, color: "#bdd7ee" },
                  { value: val2, color: "#0071ce" },
                  { value: val3, color: "#0a1f8f" },
                ]}
              />
            </TableCell>

            <TableCell style={{
              textAlign:'center'
            }}>
              {" "}
              <strong> {pour}% </strong>
            </TableCell>
            <TableCell style={{
              textAlign:'center'
            }}>
              {" "}
              <strong>{post.todo}</strong> <br /> Todo
            </TableCell>
          </TableRow>
        );
      });
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className="box" alignItems="center" padding="50px">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper1}>
              <div className=" row haut-page">
                {" "}
                <div className="col-md-6 lef">
                  <p>Acces zone</p>
                </div>
                <div className="col-md-6 rig">
                  <div className="btn-a">
                    <button className="btn-var"> Link One </button>{" "}
                  </div>
                  <div className="btn-a">
                    <button className="btn-var">Link Two </button>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Paper className={classes.paper}>
              <h6
                style={{
                  textAlign: "left",
                }}
              >
                {" "}
                Global dashboard
              </h6>
              <hr />
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>
                          {" "}
                          <TextField id="standard-search" label="filter" type="search" />
                        </strong>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <p
                          style={{
                            visibility: "hidden",
                          }}
                        >
                          valeur{" "}
                        </p>
                      </TableCell>
                      <TableCell>
                        <strong>
                        <TextField id="standard-search" label="filter" type="search" />
                        </strong>
                      </TableCell>
                      <TableCell
                        style={{
                          margin: "50px",
                        }}
                      >
                        <strong>
                        <TextField id="standard-search" label="filter" type="search" />
                        </strong>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody >
                    <DisplayData1 />
                  </TableBody>
                </Table>
              </TableContainer>
              <Box alignItems="center" justifyContent="center">
                <div className="container foot ">
                  <p>
                    {" "}
                    <StopRoundedIcon
                      style={{
                        color: "#bdd7ee",
                      }}
                    />{" "}
                    one thing
                  </p>

                  <p>
                    {" "}
                    <StopRoundedIcon
                      style={{
                        color: "#0071ce",
                      }}
                    />
                    two thing
                  </p>

                  <p>
                    {" "}
                    <StopRoundedIcon
                      style={{
                        color: "#0a1f8f",
                      }}
                    />{" "}
                    three thing
                  </p>
                </div>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Paper className={classes.paper}>
              <h6
                style={{
                  textAlign: "left",
                }}
              >
                {" "}
                News Board
              </h6>
              <hr />
              <TableContainer component={Paper}>
                <Table keyField="id" filter={filterFactory()}>
                  <TableHead>
                    <TableRow>
                      <TableCell className="cell">
                        <strong>
                        <TextField id="standard-search" label="filter" type="search" />
                        </strong>
                      </TableCell>

                      <TableCell filter="textFilter()" className="cell">
                        <strong>
                        <TextField id="standard-search" label="filter" type="search" />
                        </strong>
                      </TableCell>
                      <TableCell className="cell">
                        <strong>
                        <TextField id="standard-search" label="filter" type="search" />
                        </strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <DisplayData2 />
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
