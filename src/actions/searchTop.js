import { actionTypes } from '../actions/types';
import axios from 'axios';

const instagramURL = process.env.INSTAGRAM.toString();

//EDIT_SEARCH_TOP
export const editSearchTop = (updates) => ({
    type: actionTypes.EDIT_SERACH_TOP,
    updates
}) 

//GET_USERS_INSTAGRAM
export const getUsersInsta = (query) => async dispatch => {

    const params = {
        query
    }
    const snapshot = await axios.get([instagramURL, 'web', 'search', 'topsearch'].join('/'), {
        params
    })
    const updates = {
        users: snapshot.data.users
    }
    dispatch({
        type: actionTypes.EDIT_SERACH_TOP,
        updates
    })
}