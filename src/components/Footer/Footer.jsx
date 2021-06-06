// import './Footer.css'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import '@fontsource/roboto';
import { Typography } from '@material-ui/core';
import './Footer.css'

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
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
     
}));

function Footer () {
    theme.spacing(2)
    const classes = useStyles();

    return (
        <div className=" footer ">
     
            <Typography>
            All images © 2019-2021 ArtSplitta
            </Typography>
       
        </div>
    )
}

export default Footer;