import { Box, Card, Grid, TextField, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

function WeatherCard() {
    return (
        
            <Card sx={{
                bgColor: '#8bc34a', width: 1280, minHeight: 720, borderRadius: 10,
                background: 'linear-gradient(to right bottom, #4fc3f7, #b2ebf2)'

            }}>
                <Grid container spacing={2} direction="column" alignItems="center"
                    justifyContent="space-evenly" sx={{ pt: 5, pl: 5 }}>
                    <Box sx={{ pl: 5 }}>
                        <TextField
                            sx={{width: '464px'}}
                            size='small'
                            label="search"
                        />
                    </Box>
                    <Box sx={{ pt: 10 }}>
                        <Typography variant="h5" fontWeight={700}>Georgia, Tbilisi</Typography>
                        <Typography variant="h5" fontWeight={700}>22 C</Typography>
                        <Typography variant="h5" fontWeight={700}>Sunny ☀️</Typography>
                    </Box>
                    <Box sx={{ pt: 5 }}>
                        <Typography variant="h5" fontWeight={700}>Humidity: 55%</Typography>
                        <Typography variant="h5" fontWeight={700}>Wind Speed 20km/h</Typography>
                    </Box>

                </Grid>

            </Card>
    )
}

export default WeatherCard