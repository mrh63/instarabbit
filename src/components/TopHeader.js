import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
            color: '#626262',
            padding: '6px 16px',
            fontSize: '0.875rem',
            minWidth: '64px',
            boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)',
            boxSizing: 'border-box',
            fontFamily: 'Rubik,Montessart,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            fontWeight: '500',
            lineHeight: 1.75,
            borderRadius: '20px',
            textTransform: 'none'
        },
      },
    },
});

const useStyles = makeStyles({
    root: {
        '& $login, $free_login': {
            width: '120px',
            padding: '4px 0px',
            zIndex: 1,
            position: 'relative',
        },
        '& $login:before, $free_login:before': {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            content: "''",
            opacity: 0,
            zIndex: -1,
            position: 'absolute',
            borderRadius: '20px',
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.2s ease-in-out',
            '-o-transition': 'all 0.2s ease-in-out',
            '-moz-transition': 'all 0.2s ease-in-out',
            '-webkit-transition': 'all 0.2s ease-in-out'
        },
        
     },
    login: {
        background: 'linear-gradient(90deg, #05F1C7 0%, #00DDA2 100%)',
        marginRight: '16px',
        '&:before': {
            background: 'linear-gradient(90deg, #32F4C0 0%, #15E273 100%)'
        }
    },
    free_login: {
        background: 'linear-gradient(270deg, #FF5065 39.07%, #FF807A 99.79%, #FF9081 120.98%)',
        '&:before': {
            background: 'linear-gradient(270deg, #FE5193 0%, #F77062 99.79%)'
        }
    },
    label: {
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none'
    },
})

const TopHeader = () => {
    
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} className="statistics_top_header">
                <div className="statistics_top_header_inner">
                    <a href="/">
                        <img src="/images/logo-instablizer-top-white.7029dac8.svg" alt="Instarabbit logo" />
                    </a>
                    <div className={classes.root}>
                        <a href="https://app.instarabbit.co/login" target="__blank">
                            <Button classes={{root: classes.login, label: classes.label}}>Login</Button>
                        </a>
                        <a href="https://instarabbit.co/pricing" target="__self">
                            <Button classes={{root: classes.free_login, label: classes.label}}>Try for Free</Button>
                        </a>
                    </div>
                </div>
            </Grid>
        </ThemeProvider>
    )
}

export default TopHeader;