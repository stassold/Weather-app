import { AppBar, Toolbar, Typography } from '@mui/material';

function FooterComponent(props) {
    return (
        <AppBar position="fixed" color={props.theme} sx={{ top: 'auto', bottom: 0,  flexShrink: 0}}>
            <Toolbar>
                <Typography variant="body2" color="inherit" align="center">
                    stassold &copy; {new Date().getFullYear()}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default FooterComponent;
