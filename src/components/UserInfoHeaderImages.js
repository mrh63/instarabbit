import React from 'react';
import { Grid } from '@material-ui/core';

const UserInfoHeaderImages = (props) => {

    const {
        url,
    } = props.data

    return (
        <Grid item xs={4} className="statistics_userInfo_header_images">
            <img src={url} alt='' />
        </Grid>
    )
}

export default UserInfoHeaderImages;