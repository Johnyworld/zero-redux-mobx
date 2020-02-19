import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const { logIn, logOut } = require('./actions/user');

const App = () => {
    const user = useSelector(state => state.user.data);
    const loading = useSelector(state => state.user.loading);
    const dispatch = useDispatch();

    const onClick = useCallback(() => {
        dispatch(
            logIn({
                id: 'johnyworld',
                password: 'hello'
            })
        );
    }, []);

    const onLogout = useCallback(() => {
        dispatch(logOut());
    });

    return (
        <div>
            <div>{loading ? 'loading...' : user ? user.data.name : 'Log in please'}</div>
            <button onClick={onClick}>Log In</button>
            <button onClick={onLogout}>Log Out</button>
        </div>
    );
};

export default App;
