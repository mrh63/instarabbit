//UserInfo Reducer
import { actionTypes } from '../actions/types';

const userInfoReducerDefaultState = {
    logging_page_id: "profilePage_11666048668",
    show_suggested_profiles: true,
    show_follow_dialog: false,
    graphql: null,
    toast_content_on_load: null,
    user: null
};

export default (state = userInfoReducerDefaultState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_USER_INFO:
            return {
                ...state,
                ...action.updates
            };
        default:
            return state;
    }
};