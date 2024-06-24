import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import '../tab/tab.css'
import Mapa from '../mapa/Mapa';
import { useState,StaticImage} from "react"


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
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
 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    };
  const [inputValue, setInputValue] = useState(''); 
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
    };
  const [inputValue2, setInputValue2] = useState('');
  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
    };
  const [inputValue3, setInputValue3] = useState('');
  const handleInputChange4 = (event) => {
    setInputValue4(event.target.value);
    };
  const [inputValue4, setInputValue4] = useState('');
  
  const [latLng, setLatLng] = useState(null);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Url" {...a11yProps(0)} />
          <Tab label="Localización" {...a11yProps(1)} />
          <Tab label="Texto" {...a11yProps(2)} />
        </Tabs>
      </Box>
        <CustomTabPanel value={value} index={0}>
          Escribe tu Url
          <br></br>
          <input className="
                contenido1" type="text" placeholder="https://...." value={inputValue} onChange={handleInputChange} />
        </CustomTabPanel>
        
      <CustomTabPanel value={value} index={1}>
        <div className='titulillo'>
        Escribe localización:
        </div>
        <br></br>
        <br></br>
        {typeof window !== 'undefined' &&
        <div>
          <Mapa setLatLng={setLatLng} />
          <div className="coordinates">
            {latLng ? (
              <p>
                Latitud: {latLng.lat}, Longitud: {latLng.lng}
              </p>
            ) : (
              <p>Haz clic en el mapa para obtener las coordenadas</p>
            )}
          </div>
        
        </div>
        }
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Escribe texto<br></br>
        <input className="
              contenido1" type="text" placeholder="Escribe aqui" value={inputValue4} onChange={handleInputChange4} />
      </CustomTabPanel> 
    </Box>
  );
}