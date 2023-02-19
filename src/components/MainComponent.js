import React, {useEffect, useState} from 'react';
import WeatherComponent from './WeatherComponent';
import NasaApodComponent from './NasaApodComponent';
import FooterComponent from './UI/FooterComponent';
import HeaderComponent from "./UI/HeaderComponent";
import styles from "./MainComponent.module.css"

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
            <div className={styles.container}>
                <WeatherComponent className={styles.WeatherComp} lat={lat} lon={lon} />
                <NasaApodComponent  className={styles.NasaApod} />
            </div>
        <FooterComponent theme={isDaytime} />
        </div>
    );
}

export default MainComponent;
