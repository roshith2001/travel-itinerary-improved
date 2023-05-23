import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeInsideTabComponent from './HomeInsideTabComponent';


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
        <Box sx={{ width: '100vw'}}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100vw', fontFamily: 'comfortaa'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100vw', display:'flex', justifyContent: 'center'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
            sx={{}}
            TabIndicatorProps={{
                style: {
                  backgroundColor: "white"
                }
              }}    
        >
          <Tab  sx={{ color: 'white', flexGrow: '1', textAlign: 'center'}} 
            label="Families" 
            {...a11yProps(0)}
        />
          <Tab  sx={{ color: 'white', flexGrow: '1', textAlign: 'center'}} 
            label="Backpackers" 
            {...a11yProps(1)} 
            />
          <Tab  sx={{ color: 'white', flexGrow: '1', textAlign: 'center'}} 
            label="Students and Bachelors" 
            {...a11yProps(2)} 
            />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HomeInsideTabComponent index='0'/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HomeInsideTabComponent index='1'/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HomeInsideTabComponent index='2'/>
      </TabPanel>
    </Box>
  );
}