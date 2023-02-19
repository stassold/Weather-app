import axios from 'axios';

const API_KEY = 'Unfv03ZfI8Q3lE3wtFbG3HI8ipPNhSxo5L9dgNrt';

export const fetchApodData = async () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
};
