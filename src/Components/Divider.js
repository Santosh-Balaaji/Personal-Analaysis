import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "65%",
    backgroundColor: "#c8cbcd",
    height: theme.spacing(0.1),
    marginLeft: "18%",
    marginTop: '50px',
    position:'relative',
    top:'15%'
    
},
  
}));

export default function Dividers() {
  const classes = useStyles();

  return (
    <div className={classes.root} justifycontent="center">
      <Divider variant="middle" />
    </div>
  );
}
