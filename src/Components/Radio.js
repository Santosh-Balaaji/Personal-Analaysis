import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper,Grid} from "@material-ui/core";
import Dividers from './ComponentDivider';
import Image1 from '../Images/1.png';
import Buttons from './Button.js';
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "11em",
      width: "150em",
      height: "50em"
    }
  },
  image:{
    width:'6%',
    position:'relative',
    marginTop:'2%'
  },
  gridPosition:{
    position:'relative',
    top:'2%',
  }
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={10} >
        <img src={Image1} alt="1" className={classes.image} />
        <Buttons   />
      <Dividers/>
      </Paper>
    </div>
  );
}
