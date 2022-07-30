import React, { useEffect, useState } from 'react';
import './App.css';
import { QueryOptions } from './helpers/query.options';
import { environment } from './environment/environment';
import { Weather } from './models/weather/weather';
import { createTheme, CssBaseline, Grid, Paper, ThemeProvider } from '@mui/material';
import WeatherCard from './components/WeatherCard';
import { weatherService } from './models/weather/service';
import { backgroundColors } from './styles/backgroundColor';
import { Main } from './models/main/main';

function App() {
  const [weather, setWeather] = useState<Weather[]>([])
  const [main, setMain] = useState<Main[]>([])
  const [cityName, setCityName] = useState("");
  const [background, setBackground] = useState("#29b6f6")
  const [search, setSearch]: [string, (search: string) => void] = React.useState("Tbilisi");

  const handleChange = (e: { target: { value: string; }; } | any) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 1000
    )
  };

  const handleClick = () => {
    loadWeather();
  }

  const loadWeather = () => {
    const options = new QueryOptions()
    options.q = `${search}`
    options.appid = environment.key
    weatherService.list(options).then((r: any) => {
      setWeather(r.results)
      setCityName(r.cityName)
      setMain(r.resultsMain)
    })
  }
  useEffect(() => {
    loadWeather();
  }, [])
  console.log(background)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={{ width: '100vw', height: '100vh', bgcolor: `${background}`, borderRadius: '40px' }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ pt: 10 }}
        >
          <Grid item xs={12} lg={3} md={6}>
            <WeatherCard
              Weather={weather}
              main={main}
              city={cityName}
              handleChange={handleChange}
              handleClick={handleClick}
            />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#29b6f6'
    },
    text: {
      primary: "#e0f7fa"
    },
  },
  typography: {
    fontFamily: 'Arial',
  },
});


export default App;