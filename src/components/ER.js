import React from 'react';
import { Grid } from '@material-ui/core';

const ER = () => {

    return (
        <Grid container className="statistics_ER">
            <Grid container justify="center" className="statistics_ER_header">
                <Grid item xs={6}>
                    <span>Engagement rate</span>
                    <strong>5.04 %</strong>
                </Grid>
                <Grid item xs={6}>
                    <span>Quality rate</span>
                    <strong>100/100</strong>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ER;