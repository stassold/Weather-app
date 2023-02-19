import React, { useState, useEffect } from 'react';
import {fetchWeatherData } from '../api/weatherApi';

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
        return <p>Loading weather data...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Weather for {weatherData.name}</h1>
            <ul>
                <p>Temperature: {weatherData.main.temp - 273.15} °C</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
            </ul>
        </div>
    );
};

export default Weather;
