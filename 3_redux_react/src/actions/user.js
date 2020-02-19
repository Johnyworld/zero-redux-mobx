const logIn = data => {
    return (dispatch, getState) => {
        dispatch(logInRequest(data));
        setTimeout(() => {
            dispatch(
                logInSuccess({
                    data: {
                        id: data.id,
                        name: 'Johny Kim',
                        admin: true
                    }
                })
            );
        }, 2000);
    };
};

const logInRequest = data => {
    return {
        type: 'LOG_IN_REQUEST',
        data
    };
};

const logInSuccess = data => {
    return {
        type: 'LOG_IN_SUCCESS',
        data
    };
};

const logInFailed = data => {
    return {
        type: 'LOG_IN_FAILED',
        data
    };
};

const logOut = () => {
    return {
        type: 'LOG_OUT'
    };
};

module.exports = {
    logIn,
    logOut
};
