import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Barchart from '../Components/ChartComponents/Barchart';
import PieChart from '../Components/ChartComponents/PieChart';
import GridComponent from '../Components/GridComponent';
import Tab1 from '../Components/Tabs/Tab1';
import Tab3 from '../Components/Tabs/Tab3';
import Tab2 from '../Components/Tabs/Tab2';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  
  

  return (
    <div className={classes.root} >
        <Tabs value={value} indicatorColor="primary" onChange={handleChange} aria-label="simple tabs example" style={{backgroundColor:'whitesmoke'}}>
          <Tab label="Section One" {...a11yProps(0)} />
          <Tab label="Section Two" {...a11yProps(1)} />
          <Tab label="Section Three" {...a11yProps(2)} />
        </Tabs>
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
      <TabPanel value={value} index={0}  style={{padding:'0px'}}>
      <Tab1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Tab2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Tab3 />
      </TabPanel>
      </SwipeableViews>
    </div>
  );
}
