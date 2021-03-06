import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "67%",
    backgroundColor: "#c8cbcd",
    height: "0.1%",
    marginLeft: "16%",
    position:'relative',
    marginTop:'4%',
    marginBottom:'3%'

  }
}));

export default function Dividers() {
  const classes = useStyles();

  return (
    <div className={classes.root} justifycontent="center">
      <Divider variant="middle" />
    </div>
  );
}
