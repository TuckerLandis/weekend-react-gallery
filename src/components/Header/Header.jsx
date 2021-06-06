import '@fontsource/roboto';
import { Typography } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './Header.css'



const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF8966',
        },
        secondary: {
            main: '#FF8966',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        spacing: 16,
        flexGrow: 1,
        textAlign: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
     
}));

function Header() {
    theme.spacing(2)
    const classes = useStyles();

    return (
        <div className="{classes.root} hdrspc">
            <ThemeProvider theme={theme}>
                <AppBar position="sticky">
                <Toolbar>

                    <Typography className="App-title">ArtSplitta Gallery</Typography>
                    </Toolbar>

                </AppBar>
            </ThemeProvider>
        </div>
    )
}

export default Header