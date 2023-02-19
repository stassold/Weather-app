import axios from 'axios';

const API_KEY = '29a7ff932e4daeb1707d65fef8fdaee7';

export const fetchLocationData = async (city, state, country, limit = 1) => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${API_KEY}`;
    const response = await axios.get(url);
    return response.data[0];
};
