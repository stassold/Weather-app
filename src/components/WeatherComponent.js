import React, { useState, useEffect } from 'react';
import {fetchWeatherData } from '../api/weatherApi';
import Wind from '../img/weather-icon/wind.webp';
import Thunderstorm from  '../img/weather-icon/thunderstorm.png';
import Drizzle from  '../img/weather-icon/drizzle.png';
import Clouds from  '../img/weather-icon/cloud.jpg';
import Rain from  '../img/weather-icon/rain.png';
import Snow from  '../img/weather-icon/snow.png';
import Mist from  '../img/weather-icon/mist.png';
import Smoke from  '../img/weather-icon/smoke.png';
import Haze from  '../img/weather-icon/haze.png';
import Dust from  '../img/weather-icon/dust.png';
import Fog from  '../img/weather-icon/fog.png';
import Sand from  '../img/weather-icon/sand.png';
import LoaderComponent from "./UI/LoaderComponent";

const Weather = ({ lat, lon}) => {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchWeatherData(lat, lon);
                setWeatherData(data);
            } catch (err) {
                setError(err.message);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [lat, lon]);

    if (isLoading) {
        return LoaderComponent
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    let weatherIcon;

    switch (weatherData.weather[0].main) {
        case 'Thunderstorm':
            weatherIcon = Thunderstorm;
            break;
        case 'Drizzle':
            weatherIcon = Drizzle;
            break;
        case 'Wind':
            weatherIcon = Wind;
            break;
        case 'Rain':
            weatherIcon = Rain;
            break;
        case 'Snow':
            weatherIcon = Snow;
            break;
        case 'Mist':
            weatherIcon = Mist;
            break;
        case 'Smoke':
            weatherIcon = Smoke;
            break;
        case 'Haze':
            weatherIcon = Haze;
            break;
        case 'Dust':
            weatherIcon = Dust;
            break;
        case 'Fog':
            weatherIcon = Fog;
            break;
        case 'Sand':
            weatherIcon = Sand;
            break;
        case 'Clear':
            weatherIcon = Clouds;
            break;
        case 'Clouds':
            weatherIcon = Clouds;
            break;
        default:
            weatherIcon = Clouds;
    }

    return (
        <div>
            <h1>Weather for {weatherData.name}</h1>
            <img height="64px" width="64px" src={weatherIcon} alt={weatherData.weather[0].main} />
            <ul>
                <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
            </ul>
        </div>
    );
};

export default Weather;
