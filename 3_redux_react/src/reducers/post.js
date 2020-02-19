const { produce } = require('immer');

const initState = [];

const postReducer = (prevState = initState, action) => {
    return produce(prevState, draft => {
        switch (action.type) {
            case 'ADD_POST':
                draft.push(action.data);
                break;

            default:
                break;
        }
    });
};

module.exports = postReducer;
