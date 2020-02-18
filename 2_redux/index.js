const { createStore, applyMiddleware } = require('redux');
const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');

const initState = {
    user: {
        isLoggedIn: false,
        data: null
    },
    posts: []
};

const firstMiddleware = store => next => action => {
    console.log('Logging', action);
    next(action);
};

const thunkMiddleware = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    return next(action);
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initState, enhancer);

console.log('1st', store.getState());

store.dispatch(
    logIn({
        isLoggedIn: true,
        data: {
            id: 'johnyworld',
            name: 'Johny Kim',
            admin: true
        }
    })
);

store.dispatch(
    addPost({
        userId: 'johnyworld',
        id: 1,
        title: '인사',
        content: '안녕하세요.'
    })
);

store.dispatch(
    addPost({
        userId: 'johnyworld',
        id: 2,
        title: 'Say Hello',
        content: 'Hello world.'
    })
);

store.dispatch(logOut());

console.log('2nd', store.getState());
