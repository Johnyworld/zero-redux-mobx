const { produce } = require('immer');

const initState = {
    loading: false,
    data: null
};

const userReducer = (prevState = initState, action) => {
    return produce(prevState, draft => {
        switch (action.type) {
            case 'LOG_IN_REQUEST':
                draft.loading = true;
                break;

            case 'LOG_IN_SUCCESS':
                draft.loading = false;
                draft.data = action.data;
                break;

            case 'LOG_IN_FAILED':
                draft.loading = true;
                break;

            case 'LOG_OUT':
                draft.data = null;
                break;

            default:
                break;
        }
    });
};

module.exports = userReducer;
