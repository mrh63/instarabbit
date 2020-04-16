import { actionTypes } from '../actions/types';
import axios from 'axios';

const instagramURL = process.env.INSTAGRAM.toString();

//MAKE_REQUEST_CREATOR
const makeRequestCreator = () => {
    let source;
    return config => {
        if (source) {
            source.cancel("Only one request allowed at a time.");
        }
        source = axios.CancelToken.source();
        return axios({
            ...config,
            cancelToken: source.token
        })
    }
};
const fetch = makeRequestCreator();

//EDIT_SEARCH_TOP
export const editSearchTop = (updates) => ({
    type: actionTypes.EDIT_SERACH_TOP,
    updates
}) 

//GET_USERS_INSTAGRAM
export const getUsersInsta = (query) => async dispatch => {

    const params = { query };

    const snapshot = await fetch({
        method: 'get',
        url: [instagramURL, 'web', 'search', 'topsearch'].join('/'),
        params,
    })
    .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          // handle error
        }
    })
    
    const updates = {
        users: snapshot ? snapshot.data.users : []
    }

    dispatch(editSearchTop(updates));
}