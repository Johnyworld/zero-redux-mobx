import { createStore } from 'redux';

const reducer = () => {};

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
        type: 'CHANGE_NAME', // Type은 Action의 이름이다.
        data
    };
};

store.dispatch(changeName('Tom'));

console.log('2nd', store.getState());
