import React, {useEffect, useState} from 'react';
import WeatherComponent from './WeatherComponent';
import NasaApodComponent from './NasaApodComponent';
import FooterComponent from './UI/FooterComponent';
import HeaderComponent from "./UI/HeaderComponent";
import { Container } from '@mui/material';

function MainComponent() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const hour = time.getHours();
    const isDaytime = hour >= 6 && hour < 18 ? 'primary' : 'secondary';

    return (
        <div>
        <HeaderComponent theme={isDaytime} />
            <Container sx={{ marginTop: '2rem', marginBottom: '2rem'}}>
                <WeatherComponent lat={37.7749} lon={-122.4194} />
                <NasaApodComponent />
            </Container>
        <FooterComponent theme={isDaytime} />
        </div>
    );
}

export default MainComponent;
