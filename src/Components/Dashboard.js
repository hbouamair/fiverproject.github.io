import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, ButtonGroup, Card } from "@material-ui/core";
import "./dash.css";
import Table from "@material-ui/core/Table";
import Container from "@material-ui/core/Container";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from '@material-ui/core/Paper';

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import HSBar from "react-horizontal-stacked-bar-chart";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#8fc1e9",

   
  },
  paper: {
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  },
  root1: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  grid: {
    backgroundColor: "#ffff",
    borderRadius: "10px",
    margin: "5px auto ",
    boxShadow: "5px 5px 5px #594a43",
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <Box
      display="grid"
      gridGap="4"
      
      alignItems="center"
      padding="50px"
    >
      <Grid container  direction="row" spacing={2}>
        <Grid className=" grid  col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 " >
        
          
            <Grid item xs={6}>

              {" "}
              <h5  >
                
                hello
              </h5>
            </Grid>
            <Grid item xs={6}>
              <div className="container">
                {" "}
                <button className="btn-var" > Smarty </button>{" "}
                <button  className="btn-var" > lets go </button>
              </div>{" "}
            </Grid>
          
          
        </Grid>
        
        <Grid className=" grid col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12"  >
          <h5
            style={{
              textAlign: "left",
            }}
          >
            {" "}
            Global dashboard
          </h5>
          <hr />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Filter </strong>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <strong>Filter </strong>
                  </TableCell>
                  <TableCell>
                    <strong>Filter </strong>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>hamza</TableCell>
                  <TableCell>
                    <HSBar
                      data={[
                        { value: 10000, color: "#bdd7ee" },
                        { value: 5000, description: "5.000", color: "#0071ce" },
                        { value: 3000, description: "3.000", color: "#0a1f8f" },
                      ]}
                    />
                  </TableCell>
                  <TableCell> 9% cell </TableCell>
                  <TableCell>new map letsgp</TableCell>

                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid className=" grid col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
          <h5
            style={{
              textAlign: "left",
            }}
          >
            {" "}
            Global dashboard
          </h5>
          <hr />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Filter </strong>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <strong>Filter </strong>
                  </TableCell>
                  <TableCell>
                    <strong>Filter </strong>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      
    </Box>
  );
}

export default Dashboard;
