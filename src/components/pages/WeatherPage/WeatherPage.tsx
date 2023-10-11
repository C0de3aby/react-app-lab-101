import * as React from 'react';
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Weather } from '../../../types/weather.types';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

type WeatherPageProps = {
  //
};

const cityList = [
  { value: 'Xining', label: 'Xining' },
  { value: 'Beijing', label: 'Beijing' },
  { value: 'Shanghai', label: 'Shanghai' },
  { value: 'Guangzhou', label: 'Guangzhou' },
  { value: 'Shenzhen', label: 'Shenzhen' },
  { value: 'Chengdu', label: 'Chengdu' },
  { value: 'Bangkok', label: 'Bangkok' },
  { value: 'Chiang Mai', label: 'Chiang Mai' },
];

const WeatherPage: React.FC<any> = () => {
  const [selectedCity, setSelectedCity] = React.useState('');
  const [weatherData, setWeatherData] = React.useState<Weather | null>(null);
  const apiKey = '40d704f0af888d1c34433cbf555fbb99';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${apiKey}`;

  const handleCityChange = (event: { target: { value: any } }) => {
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue); // อัปเดต state เมื่อมีการเลือกค่าใหม่
    console.log(selectedValue); // แสดงค่าที่เลือกใน console.log
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      //console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (selectedCity) {
      fetchWeatherData();
    }
  }, [selectedCity]); // weatherData

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#F00000',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            alignContent: 'center',
            placeItems: 'center',
            minHeight: '94vh',
          }}
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={selectedCity}
            helperText="Please select your city"
            onChange={handleCityChange}
            sx={{
              width: 400,
              marginBottom: '20px',
            }}
          >
            {cityList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Card
            sx={{
              bgcolor: 'white',
              minWidth: 400,
              maxWidth: 400,
              minHeight: 550,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F5F5F5',
              borderRadius: 4,
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Stack
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: 400,
                }}
              >
                {selectedCity ? (
                  weatherData ? (
                    <>
                      <Typography
                        sx={{
                          fontSize: 40,
                          fontWeight: 'Bold',
                        }}
                        color="GrayText"
                      >
                        {weatherData.name}
                      </Typography>
                      <br />
                      <Avatar
                        sx={{
                          bgcolor: red[400],
                          width: '10vh',
                          height: '10vh',
                        }}
                        src={`https://openweathermap.org/img/wn/${weatherData.weather.map(
                          (weather) => weather.icon,
                        )}@2x.png`}
                      />
                      <br />
                      <Typography
                        sx={{
                          fontSize: 28,
                          fontWeight: 'Normal',
                        }}
                        color="GrayText"
                      >
                        {weatherData.weather.map((weather) => weather.main)}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 'Normal',
                        }}
                        color="GrayText"
                      >
                        {weatherData.weather.map((weather) => weather.description)}
                      </Typography>
                      <br />
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 'Normal',
                        }}
                        color="GrayText"
                      >
                        Current {weatherData.main.temp} °C
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 'Normal',
                        }}
                        color="GrayText"
                      >
                        Min {weatherData.main.temp_min} °C
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 'Normal',
                        }}
                        color="GrayText"
                      >
                        Max {weatherData.main.temp_max} °C
                      </Typography>
                    </>
                  ) : (
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 'Normal',
                      }}
                      color="GrayText"
                    >
                      Loading...
                    </Typography>
                  )
                ) : (
                  ''
                )}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default WeatherPage;
