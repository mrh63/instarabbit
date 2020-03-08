import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import UserInfoHeaderImages from './UserInfoHeaderImages';

const UserInfoHeader = () => {

    const { user } = useSelector(state => state.userInfo.graphql);

    const edges = user.edge_owner_to_timeline_media.edges.filter((edge, i) => i < 3);

    const profile_pic_url_hd = user.profile_pic_url_hd;

    const full_name = user.full_name;

    const username = user.username;

    return (
        <Grid container className="statistics_userInfo_header">
            <Grid item xs={12} className="statistics_userInfo_header_images_container">
                {
                    edges && edges.length > 0 ? edges.map(({node}, i) =>
                    {
                        const data = {url: node.thumbnail_resources[0].src};
                        return <UserInfoHeaderImages key={i} data={data}/>
                    })
                    : null
                }
            </Grid>
            <Grid item xs={12} className="statistics_userInfo_header_userInfo">
                <Grid item xs={5} className="statistics_userInfo_header_userPic">
                    <img src={profile_pic_url_hd} alt="" />
                </Grid>
                <h2>{full_name}</h2>
                <span>{username}</span>
            </Grid>
        </Grid>
    )
}

export default UserInfoHeader;