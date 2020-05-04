import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Tooltip from '@material-ui/core/Tooltip';
import {Typography} from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  StronglyAgree:{
    boxShadow:
      "inset 0 0 0 5px rgba(86, 172, 138, 1), inset 0 -4px 0 rgba(16,22,26,.1)",
      "input:hover ~ &": {
        backgroundColor: "#56ac8a",
        
      }, 
    [theme.breakpoints.down('md')]:{
    width:30,
    height:30,
    },
    [theme.breakpoints.up('sm')]:{
      width:60,
      height:60,
    },
    [theme.breakpoints.up('lg')]:{
      width:70,
      height:70,
    }
  },
  StronglyDisAgree:{
    boxShadow:
      "inset 0 0 0 5px rgba(95, 57, 77, 1), inset 0 -4px 0 rgba(16,22,26,.1)",
    
    "input:hover ~ &": {
      backgroundColor: "#5f394d",
      
    },
    [theme.breakpoints.down('md')]:{
    width:30,
    height:30,
    },
    [theme.breakpoints.up('sm')]:{
      width:60,
      height:60,
    },
    [theme.breakpoints.up('lg')]:{
      width:70,
      height:70,
    }
  },
  Agree:{
    boxShadow:
      "inset 0 0 0 5px rgba(152, 205, 184, 1), inset 0 -4px 0 rgba(16,22,26,.1)",
    "input:hover ~ &": {
      backgroundColor: "#98cdb8",
    },
    [theme.breakpoints.down('md')]:{
      width:25,
      height:25,
      },
      [theme.breakpoints.up('sm')]:{
        width:50,
        height:50,
      },
      [theme.breakpoints.up('lg')]:{
        width:60,
        height:60,
      }
  },
  DisAgree:{
    boxShadow:
      "inset 0 0 0 5px rgba(169, 112, 142, 1), inset 0 -4px 0 rgba(16,22,26,.1)",
    "input:hover ~ &": {
      backgroundColor: "#a9708e",
    },
    [theme.breakpoints.down('md')]:{
      width:25,
      height:25,
      },
      [theme.breakpoints.up('sm')]:{
        width:50,
        height:50,
      },
      [theme.breakpoints.up('lg')]:{
        width:60,
        height:60,
      }
  },
  Neutral:
  {
    boxShadow:
      "inset 0 0 0 5px rgba(155, 159, 170, 1), inset 0 -4px 0 rgba(16,22,26,.1)",
    "input:hover ~ &": {
      backgroundColor: "#9b9faa",
    },
    [theme.breakpoints.down('md')]:{
      width:20,
      height:20,
      },
      [theme.breakpoints.up('sm')]:{
        width:40,
        height:40,
      },
      [theme.breakpoints.up('lg')]:{
        width:50,
        height:50,
      }
  },
  Typo:{
    [theme.breakpoints.down('md')]:{
      fontSize:'0.7em'
      },
      [theme.breakpoints.up('sm')]:{
        fontSize:'0.7em'
      },
      [theme.breakpoints.up('lg')]:{
        fontSize:'1.2em'
      }
  },
TypoMargin:{
  [theme.breakpoints.down('md')]:{
    marginLeft:'-1.5em',
    marginRight:'-2.5em'
    },
    [theme.breakpoints.up('sm')]:{
      marginLeft:'-1em'
    },
    [theme.breakpoints.up('lg')]:{
      marginLeft:'-0.3em'

    }
},
  
  icon: {
    borderRadius: "50%",
    
    
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },

    
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  }
}));

export default function CustomizedRadios(props) {
  const classes = useStyles();
  
  
     
  return (
    <FormControl component="fieldset" justifycontent="center">
      <RadioGroup
        defaultValue="female"
        aria-label="gender"
        name="customized-radios"
        row
        onChange={props.onChange}
      >
        <Typography className={classes.Typo} style={{marginTop:'1.5em' ,marginRight:'1em',marginLeft:'-1.5em',color:'#56ac8a',fontWeight:'600',fontFamily:'Open Sans,Helvetica Neue,Arial'}} >Agree </Typography> 
        <Tooltip title="Strongly Agree">
          <FormControlLabel
            value="Strongly Agree"
            control={<Radio
              className={classes.root}
              color="default"
              checkedIcon={<span style={{backgroundColor:"#56ac8a"}} className={clsx(classes.checkedIcon,classes.icon,classes.StronglyAgree)} />}
              icon={<span  className={clsx(classes.StronglyAgree,classes.icon)} />}
            />}
          />
          </Tooltip>
        <Tooltip title="Agree">
          <FormControlLabel value="Agree" 
          control={<Radio
                    className={classes.root}
                    color="default"
                    checkedIcon={<span style={{backgroundColor:"#98cdb8"}} className={clsx(classes.checkedIcon,classes.icon,classes.Agree)} />}
                    icon={<span  className={clsx(classes.Agree,classes.icon)} />}
                    />} />
          </Tooltip>
          <Tooltip title="Neutral">          
          <FormControlLabel value="Neutral" 
          control={<Radio
                    className={classes.root}
                    color="default"
                    checkedIcon={<span style={{backgroundColor:"#9b9faa"}} className={clsx(classes.checkedIcon,classes.icon,classes.Neutral)} />}
                    icon={<span  className={clsx(classes.Neutral,classes.icon)} />}
                    />} />
          </Tooltip>
          <Tooltip title="DisAgree">
          <FormControlLabel value="DisAgree" control={<Radio
                    className={classes.root}
                    color="default"
                    checkedIcon={<span style={{backgroundColor:"#a9708e"}} className={clsx(classes.checkedIcon,classes.icon,classes.DisAgree)} />}
                    icon={<span  className={clsx(classes.DisAgree,classes.icon)} />}
                    />} />
          </Tooltip>
          <Tooltip title="Strongly DisAgree">
          <FormControlLabel
            value="Strongly DisAgree"
            control={<Radio
              className={classes.root}
              color="default"
              checkedIcon={<span style={{backgroundColor:"#5f394d"}} className={clsx(classes.checkedIcon,classes.icon,classes.StronglyDisAgree)} />}
              icon={<span  className={clsx(classes.StronglyDisAgree,classes.icon)} />}
            />}
          />
          </Tooltip>
        <Typography className={clsx(classes.Typo,classes.TypoMargin)} style={{marginTop:'1.5em',color:'#5f394d',fontWeight:'600',fontFamily:'Open Sans,Helvetica Neue,Arial'}} >DisAgree </Typography> 
      </RadioGroup>
    </FormControl>
  );
}
