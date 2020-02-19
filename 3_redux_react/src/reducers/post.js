const initState = [];

const postReducer = (prevState = initState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...prevState, action.data];
        default:
            return prevState;
    }
};

module.exports = postReducer;
