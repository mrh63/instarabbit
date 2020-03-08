import React from 'react';
import TopHeader from './TopHeader';
import SearchHeader from './SearchHeader';
import Grid from '@material-ui/core/Grid';

const Header = () => {

    return (
        <Grid container justify="center"  className="statistics_header">
            <TopHeader/>
            <SearchHeader/>
        </Grid>
    )
}

export default Header;