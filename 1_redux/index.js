const { createStore } = require('redux');

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...prevState,
                name: action.data
            };
        case 'CHANGE_AGE':
            return {
                ...prevState,
                age: action.data
            };
        default:
            return { ...prevState };
    }
};

const initState = {
    name: 'Johny Kim',
    age: 34,
    gender: 'male'
};

const store = createStore(reducer, initState);

console.log('1st', store.getState());

// Actions
const changeName = data => {
    return {
        type: 'CHANGE_NAME',
        data
    };
};

const changeAge = data => {
    return {
        type: 'CHANGE_AGE',
        data
    };
};

store.dispatch(changeName('Tom'));

console.log('2nd', store.getState());
