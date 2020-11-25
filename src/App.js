import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Card } from '@material-ui/core';
import Dash from './Components/Main';



function App() {
 
  return (
    <div className="App"  >
    
    
    <Dash/>
    


   
  
  </div>
  );
}

export default App;
