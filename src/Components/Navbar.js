import React from 'react';
import Grid from '@material-ui/core/Grid';

 export class profile extends React.Component {
  render() {

    return (
    <React.Fragment>
      <Grid container spacing={8}>
      //the below columns will be full width! I've changed the 12 to 6
      <Grid item xs={6} style={{backgroundColor: 'blue', height: '250px'}}></Grid>
      <Grid item xs={6} style={{backgroundColor: 'grey', height: '250px'}}></Grid>

      {/* Form two columns with next row*/}

      <Grid container={'true'} item sx={12}>
        <Grid item={'true'} xs={6} md={8} style={{backgroundColor: 'green', height: '50px'}}></Grid>
        <Grid item={'true'} xs={6} md={4} style={{backgroundColor: 'orange', height: '50px'}}></Grid>
      </Grid>
    </Grid> 
  </React.Fragment>
)}}

