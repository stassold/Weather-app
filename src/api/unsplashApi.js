import axios from 'axios';

const API_KEY = 'nQ6iFtGKwtUPtDPzlokmANmVIYa3ZFyoUPUDGNCS4qA'; // Access Key

export const RandomPhoto = async () => {
    const url = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=1`;
    const response = await axios.get(url);
    return response.data;
};

export const getCollectionById = async (id) => {
    const url = `https://api.unsplash.com/collections/${id}/photos/?client_id=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
}