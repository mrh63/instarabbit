import { actionTypes } from '../actions/types';

//SearchTop Reducer
const searchTopReducerDefaultState = {
    users: [],
    places: [],
    hashtags: [],
    has_more: true,
    rank_token: '',
    clear_client_cache: false,
    status: ''
};

export default (state = searchTopReducerDefaultState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_SERACH_TOP:
            return {
                ...state,
                ...action.updates
            };
        default:
            return state;
    }
};