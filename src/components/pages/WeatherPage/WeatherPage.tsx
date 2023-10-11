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

type WeatherPageProps = {
  //
};

const WeatherPage: React.FC<any> = () => {
  const [weatherData, setWeatherData] = React.useState<Weather | null>(null);
  const city = 'Bangkok';
  const apiKey = '40d704f0af888d1c34433cbf555fbb99';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

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
    if (!weatherData) {
      fetchWeatherData();
    }
  }, [weatherData]); // weatherData

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
            placeItems: 'center',
            minHeight: '94vh',
          }}
        >
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
              {weatherData ? (
                <Stack
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: 400,
                  }}
                >
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
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    onClick={() => {
                      fetchWeatherData();
                    }}
                  >
                    Refresh
                  </Button>
                </Stack>
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
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default WeatherPage;
