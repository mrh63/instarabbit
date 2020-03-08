import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Posts from './Posts';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import clsx from 'clsx';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
    box: {
        position: 'relative',
        maxWidth: '100%'
    },
    arrows: {
        '& $arrowRight, $arrowLeft': {
            top: '50%',
            color: 'rgba(0, 0, 0, 0.12)',
            cursor: 'pointer',
            zIndex: '1',
            position: 'absolute',
            fontSize: '120px',
            transform: 'translateY(-50%)'
        }
    },
    arrowRight: {
        right: 0
    },
    arrowLeft: {
        left: 0
    },
    footer: {
        display: 'flex',
        marginTop: '24px',
        justifyContent: 'center'
    },
    dot: {
        width: '16px',
        border: 'none',
        cursor: 'pointer',
        height: '16px',
        outline: 'none',
        marginLeft: '8px',
        borderRadius: '50%',
        backgroundColor: '#e0e0e0'
    },
    activeDot: {
        backgroundColor: '#bdbdbd'
    }
})

const TopPost = () => {

    const classes = useStyles();
    const { user } = useSelector(state => state.userInfo);
    const [index, setIndex] = useState(0);
    const post1 = user.edge_owner_to_timeline_media.edges.sort((a, b) => 
        b.node.edge_media_preview_like.count - a.node.edge_media_preview_like.count
    ).filter((node, i) => i < 3)

    const post2 = user.edge_owner_to_timeline_media.edges.sort((a, b) => 
        b.node.edge_media_preview_like.count - a.node.edge_media_preview_like.count
    ).filter((node, i) => (i > 2 && i < 6))

    const handleArrow = () => {
        setIndex(prevIndex => prevIndex === 0 ? 1 : 0)
    }
    
    return (
        <Grid container justify="center" className="statistics_topPost_container">
            <Grid item xs={12} lg={6} className="statistics_topPost">
                <h2>Top Post</h2>
                <Box className={classes.box}>
                    <div className={classes.arrows}>
                        <div className={classes.arrowRight} onClick={handleArrow}>›</div>
                        <div className={classes.arrowLeft} onClick={handleArrow}>‹</div>
                    </div>
                    <div style={{overflowX: 'hidden'}}>
                        <AutoPlaySwipeableViews index={index}
                            enableMouseEvents
                            onChangeIndex={index => setIndex(index)} interval={10000}
                        >
                            <Posts posts={post1}/>
                            <Posts posts={post2}/>
                        </AutoPlaySwipeableViews>
                    </div>
                    <Box className={classes.footer}>
                        <div className={clsx(classes.dot, index ===0 ? classes.activeDot : null)} 
                            onClick={() => setIndex(0)}
                        />
                        <div className={clsx(classes.dot, index ===1 ? classes.activeDot : null)} 
                            onClick={() => setIndex(1)}
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default TopPost;