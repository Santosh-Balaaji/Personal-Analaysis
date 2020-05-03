import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: '#ffffff',
    position:'center'
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#57ae8c',
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#000000"
    }
  }
});
 

export default function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className={classes.root} >
        <Toolbar>
          <Typography variant="h6"  className={classes.title}>
            {props.AppBarText}
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>  
  );
}
