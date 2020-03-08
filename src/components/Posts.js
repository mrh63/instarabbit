import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
})

const Posts = ({posts}) => {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
             {
                    posts.map(({node}, i) => (
                        <div className="topPost" key={i}>
                            <img src={node.thumbnail_src} alt=""/>
                            <div>
                                <div>
                                    <span>Likes</span>
                                    <strong>{node.edge_media_preview_like.count}</strong>
                                </div>
                                <div>
                                    <span>Comments</span>
                                    <strong>{node.edge_media_to_comment.count}</strong>
                                </div>
                            </div>
                            <div className="ER_section">
                                <span>Engagement rate</span>
                                <span>15.43 %</span>
                            </div>
                        </div>
                    ))
                }
        </Box>
    )
}

export default Posts;