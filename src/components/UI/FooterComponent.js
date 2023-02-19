import { AppBar, Toolbar, Typography } from '@mui/material';

function FooterComponent() {
    return (
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Typography variant="body2" color="inherit" align="center">
                    stassold &copy; {new Date().getFullYear()}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default FooterComponent;
