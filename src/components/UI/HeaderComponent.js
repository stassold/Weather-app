import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function HeaderComponent() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Weather App
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;
