import { Box, Card, Grid, TextField,Typography } from '@mui/material'
import React from 'react'
import { backgroundColors } from '../styles/backgroundColor';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
interface WeatherCardProps {
    Weather: any
    main: any 
    city: string
    handleChange: Function | any 
    handleClick: Function | any 
}

function WeatherCard(props: WeatherCardProps) {
    const { Weather, main, city, handleChange, handleClick  } = props
    return (
        <>
            {Weather?.map((weath: any, index: any) => {
                return (
                    <Card sx={{
                        bgColor: '#8bc34a', width: '80vw', minHeight: '80vh', borderRadius: 10,
                        background: `linear-gradient(to right top, #4fc3f7, #eceff1)`
                    }}
                        key={index}
                    >
                        <Grid container spacing={2} direction="column" alignItems="center"
                            justifyContent="space-evenly" sx={{ pt: 5, pl: 2 }}>
                            <Box>
                                <TextField
                                    sx={{ width: '50vw' }}
                                    size='small'
                                    label="search"
                                    onChange={(e) => handleChange(e)}
                                    InputProps={{
                                        endAdornment: (
                                            <SavedSearchIcon 
                                            sx={{color: '#4fc3f7', cursor: 'pointer'}}
                                            onClick={handleClick}
                                            />
                                        )
                                    }}
                                />
                            </Box>
                            <Box sx={{ pt: 10, pr: 10 }}>
                                <Typography variant="h5" fontWeight={700}>{city}</Typography>
                                <Typography variant="h5" fontWeight={700}>{Math.floor(main?.temp-273.19)}</Typography>
                                <Typography variant="h5" fontWeight={700}>{weath.description} ⛅</Typography>
                            </Box>
                            <Box sx={{ pt: 5, pr: 5 }}>
                                <Typography variant="h5" fontWeight={700}>Humidity: {main?.humidity}%</Typography>
                                <Typography variant="h5" fontWeight={700}>Wind Speed 20km/h</Typography>
                            </Box>

                        </Grid>
                    </Card>
                )
            })}
        </>



    )
}

export default WeatherCard