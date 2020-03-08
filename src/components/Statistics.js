import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import UserInfo from './UserInfo';
import ER from './ER';
import TopPost from './TopPost';

const Statistics = () => {

    const { graphql } = useSelector(state => state.userInfo);
    return (
        <Grid container className="statistics">
            <Header />
            <Grid item xs={12}>
                {
                    graphql && (
                        <React.Fragment>
                            <UserInfo />
                            <ER />
                            <TopPost/>
                        </React.Fragment>
                    )
                }
                
            </Grid>
        </Grid>
    )
}

export default Statistics;