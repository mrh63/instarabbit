import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { getUsersInsta, editSearchTop } from '../actions/searchTop';
import { getDataUserPage, editUserInfo } from '../actions/userInfo';

const SearchHeader = () => {

    const dispatch = useDispatch();
    const {users} = useSelector(state => state.searchTop);
    const { loading } = useSelector(state => state.userInfo);
    const [textInput, setTextInput] = useState('');
    
    const handleOnChangeInput = e => {
        setTextInput(e.target.value);
        dispatch(editUserInfo({graphql: null}))
        if (e.target.value.length > 2) {
            dispatch(getUsersInsta(e.target.value))
        } else {
            dispatch(editSearchTop({users: []}))
        }
    }
    const handleOnClickUser = username => {
        setTextInput(username)
        dispatch(editSearchTop({users: []}))
    }

    const handleClickGetData = () => {
        dispatch(editUserInfo({loading: true}));
        dispatch(getDataUserPage(textInput))
    }

    return (
        <Grid item xs={12} md={6} className="statistics_search_header">
            <h1>Enter your Instagram username</h1>
            <input type="text" placeholder="Enter your Instagram username" disabled={loading}
                    onChange={handleOnChangeInput} value={textInput}
            />
            {
                users.length > 0 && (
                    <ul className="accounts_list">
                        {
                            users.map(({user}, i) => 
                                <li key={i} onClick={() => handleOnClickUser(user.username)}>
                                    <img src={user.profile_pic_url} alt={user.username}/>
                                    <span>{user.username}</span>
                                </li>
                            )
                        }
                    </ul>
                )
            }
            <button onClick={handleClickGetData} disabled={loading}>
                {
                    loading ? (
                        <div className="lds_hourglass"></div>
                    ) : 'Show Statistics'
                }
            </button>
        </Grid>
    )
}

export default SearchHeader;