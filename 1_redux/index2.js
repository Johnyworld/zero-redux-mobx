const { createStore } = require('redux');

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...prevState,
                user: action.data
            };
        case 'LOG_OUT':
            return {
                ...prevState,
                user: null
            };
        case 'ADD_POST':
            return {
                ...prevState,
                posts: [...prevState.posts, action.data]
            };
        default:
            return { ...prevState };
    }
};

const initState = {
    user: 'Johny Kim',
    posts: []
};

const store = createStore(reducer, initState);

console.log('1st', store.getState());

// Actions
const logIn = data => {
    return {
        type: 'LOG_IN',
        data
    };
};

const logOut = data => {
    return {
        type: 'LOG_OUT'
    };
};

const addPost = data => {
    return {
        type: 'ADD_POST',
        data
    };
};

store.dispatch(
    logIn({
        id: 'johnyworld',
        name: 'Johny Kim',
        admin: true
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
