import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { getUsersInsta, editSearchTop } from '../actions/searchTop';
import { getDataUserPage, editUserInfo } from '../actions/userInfo';

const SearchHeader = () => {

    const dispatch = useDispatch();
    const {users} = useSelector(state => state.searchTop);
    const { loading } = useSelector(state => state.userInfo);
    const [textInput, setTextInput] = useState({ name: '', active: false});
    
    const handleOnChangeInput = e => {
        setTextInput({name: e.target.value, active: false});
        dispatch(editUserInfo({graphql: null, user: null}))
        if (e.target.value.length > 2) {
            dispatch(getUsersInsta(e.target.value))
        } else {
            dispatch(editSearchTop({users: []}))
        }
    }
    const handleOnClickUser = username => {
        setTextInput({name:username, active: true})
        dispatch(editSearchTop({users: []}))
    }

    const handleClickGetData = () => {
        if (textInput.active) {
            dispatch(editUserInfo({loading: true}));
            dispatch(getDataUserPage(textInput.name))
        }
    }

    return (
        <Grid item xs={12} md={6} className="statistics_search_header">
            <h1>Enter your Instagram username</h1>
            <input type="text" placeholder="Enter your Instagram username" disabled={loading}
                    onChange={handleOnChangeInput} value={textInput.name}
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