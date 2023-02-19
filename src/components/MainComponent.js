import React, {useEffect, useState} from 'react';
import WeatherComponent from './WeatherComponent';
import NasaApodComponent from './NasaApodComponent';
import FooterComponent from './UI/FooterComponent';
import HeaderComponent from "./UI/HeaderComponent";
import { Container } from '@mui/material';

function MainComponent() {
    const [time, setTime] = useState(new Date());
    const [position, setPosition] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => setPosition(position),
            error => console.error(error)
        );
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const hour = time.getHours();
    const isDaytime = hour >= 6 && hour < 18 ? 'primary' : 'secondary';
    let lat = 37.7749;
    let lon = -122.4194;
    if (position && position.coords) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
    }

    return (
        <div>
        <HeaderComponent theme={isDaytime} />
            <Container sx={{ marginTop: '2rem', marginBottom: '2rem'}}>
                <WeatherComponent lat={lat} lon={lon} />
                <NasaApodComponent />
            </Container>
        <FooterComponent theme={isDaytime} />
        </div>
    );
}

export default MainComponent;
