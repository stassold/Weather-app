import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import TimeComponent from "../TimeComponent";
import { Link } from 'react-router-dom';





function HeaderComponent({theme}) {
    return (
        <AppBar position="static" color={theme} >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Weather App
                </Typography>
                <Typography variant="subtitle1" component="div" sx={{ flexGrow: 0 }}>
                    <TimeComponent></TimeComponent>
                </Typography>
                <Link to="/">Main</Link>
                <Link to="/collection">Collection</Link>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;
