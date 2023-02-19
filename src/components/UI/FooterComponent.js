import { AppBar, Toolbar, Typography } from '@mui/material';

function FooterComponent({theme}) {
    return (
        <AppBar position="fixed" color={theme} sx={{ top: 'auto', bottom: 0}}>
            <Toolbar>
                <Typography variant="body2" color="inherit" align="center">
                    stassold &copy; {new Date().getFullYear()}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default FooterComponent;
