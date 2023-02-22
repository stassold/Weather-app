import React from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';
import TimeComponent from "../TimeComponent";
import ButtonLink from "./ButtonLink";



function HeaderComponent({theme}) {
    return (
        <AppBar position="static" color={theme} >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Weather App
                </Typography>
                <ButtonLink to="/" variant="contained" color={theme}>
                    Home
                </ButtonLink>
                <ButtonLink to="/collection" variant="contained" color={theme}>
                    Collection
                </ButtonLink>
                <Typography variant="subtitle1" component="div" sx={{ flexGrow: 0 }}>
                    <TimeComponent></TimeComponent>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;
