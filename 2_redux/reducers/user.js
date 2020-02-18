const initState = {
    isLoggedIn: false,
    data: null
};

const userReducer = (prevState = initState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...prevState,
                data: action.data
            };
        case 'LOG_OUT':
            return {
                ...prevState,
                data: null
            };
        default:
            return { ...prevState };
    }
};

module.exports = userReducer;
