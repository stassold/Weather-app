import React, { useState, useEffect } from 'react';
import LoaderComponent from "./UI/LoaderComponent";
import {fetchApodData} from "../api/nasaApodApi";

function NasaApodComponent() {
    const [apodData, setApodData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchApodData();
                setApodData(data);
            } catch (err) {
                setError(err.message);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return LoaderComponent
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>{apodData.title}</h1>
            <img src={apodData.url} alt={apodData.title} />
            <p>{apodData.explanation}</p>
        </div>
    );
}

export default NasaApodComponent;
