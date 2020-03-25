import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import {Paper,Grid,Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      height: '6rem',
      width:'69rem',
      padding: '10px 10px',
      margin: `${theme.spacing(1)}px auto`,
    backgroundColor: '#e0e0e0',
  },
  RadioButton:{

  },
  margin: {
      height: theme.spacing(3),
      left: 400
    },
    slider:{
        width: 430,
        left: 400
    }

}));

export default function RadioButtonsGroup(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event,value) => {
    setValue(event.target.value);
    props.onChange(event,value);
  };

  
  return (
<Paper elevation={15} className={classes.paper} >
<Grid container wrap="nowrap" spacing={2}>
  <Grid item xs >
  <div className={classes.margin} />
<Typography variant='h6' id="discrete-slider-custom" gutterBottom >
  {props.radioQues}
</Typography>
<div>
      <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={(event,value)=>handleChange(event,value)}
          >
        <Grid container justify="center" spacing={1}>
        <FormGroup row>
          <FormControlLabel value="female" control={<Radio />}  label={props.radioOption1}/>
          <FormControlLabel value="male" control={<Radio />} label={props.radioOption2}/>
        </FormGroup>
      </Grid>
        </RadioGroup>
      </FormControl>
    </div>  
    </Grid>
</Grid>
</Paper>
  );
}
