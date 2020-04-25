import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    root: {
      width: "98%",
      backgroundColor: "#57ae8c",
      height: theme.spacing(0.2),
      margin: '10px',
      marginTop: '40px'
  },
    
  }));

  
  export default function Footer() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>

      </div>
    );
  }
  