import React, {useState, useEffect} from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import TimeComponent from "../TimeComponent";


function HeaderComponent() {
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
        <AppBar position="static" color={isDaytime ? 'primary' : 'secondary'}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Weather App
                </Typography>
                <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                    <TimeComponent></TimeComponent>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;
