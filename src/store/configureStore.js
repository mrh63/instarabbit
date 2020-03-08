import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import searchTopReducer from '../reducers/searchTop';
import userInfoReducer from '../reducers/userInfo';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(
        combineReducers({
            searchTop: searchTopReducer,
            userInfo: userInfoReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};
