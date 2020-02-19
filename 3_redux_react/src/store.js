const { createStore, applyMiddleware, compose } = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');
const reducer = require('./reducers');

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

const enhancer =
    process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
        : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initState, enhancer);

module.exports = store;
