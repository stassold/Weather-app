import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import TimeComponent from "../TimeComponent";


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
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;
