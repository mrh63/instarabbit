import { actionTypes } from '../actions/types';
import axios from 'axios';

const instagramURL = process.env.INSTAGRAM.toString();
const query_hash = process.env.QUERY_HASH.toString();

//EDIT_USER_INFO
export const editUserInfo = (updates) => ({
    type: actionTypes.EDIT_USER_INFO,
    updates
})

//GET_DATA_USER_PAGE
export const getDataUserPage = (username) => async dispatch => {

    try {
        const snapshot1 = await axios({
            method: 'get',
            url: [instagramURL, username].join('/'),
            params: {
                __a: 1
            }
        })
        
        const { id, edge_owner_to_timeline_media } = snapshot1.data.graphql.user;
        const variables = {
            id,
            first: edge_owner_to_timeline_media.count,
            after: edge_owner_to_timeline_media.page_info.end_cursor
        };
        
        const snapshot2 = await axios({
            method: 'get',
            url: [instagramURL, 'graphql', 'query'].join('/'), 
            params: {
                query_hash,
                variables: JSON.stringify(variables)
            }
        })
        
        const updates = {
            graphql: snapshot1.data.graphql,
            user: snapshot2.data.data.user,
            loading: false
        }
        dispatch(editUserInfo(updates));
    } catch (error) {
        const updates = {
            isError: error
        }
        dispatch(editUserInfo(updates));
    }
    
} 

