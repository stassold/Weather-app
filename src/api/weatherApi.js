import axios from 'axios';

const API_KEY = '29a7ff932e4daeb1707d65fef8fdaee7';

export const fetchWeatherData = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
};
