import React, { useEffect, useState } from 'react';
import './App.css';
import { QueryOptions } from './helpers/query.options';
import { environment } from './environment/environment';
import { weatherService } from './models/weather/service';
import { Weather } from './models/weather/weather';
import { Box, Container, createTheme, Grid, Paper, ThemeProvider } from '@mui/material';
import WeatherCard from './components/WeatherCard';
import { red } from '@mui/material/colors';

function App() {
  const [weather, setWeather] = useState<Weather[]>([])

  const loadMain = () => {
    const options = new QueryOptions()
    options.q = "Tbilisi"
    options.appid = environment.key
    weatherService.list(options).then((r: any) => {
      setWeather(r.results)
    })
  }
  useEffect(() => {
    // loadMain();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100vw', height: '100vh', bgcolor: '#29b6f6', borderRadius: '40px' }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ pt: 10 }}
        >
          <Grid item xs={12} lg={3} md={6}>
            <WeatherCard />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}



const theme = createTheme({
  palette: {
    primary: {
      main: '#e0f7fa',
    },
    text:{
      primary: "#e0f7fa"
    },
  },
  typography: {
    fontFamily: 'Arial',
  },
  
});


export default App;
