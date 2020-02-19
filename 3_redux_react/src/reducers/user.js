const initState = {
    loading: false,
    data: null
};

const userReducer = (prevState = initState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            return {
                ...prevState,
                loading: true
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...prevState,
                loading: false,
                data: action.data
            };
        case 'LOG_IN_FAILED':
            return {
                ...prevState,
                loading: false
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
