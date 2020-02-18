# Redux and MobX course by Zerocho

### Process

1. Store 에 글로벌 State가 담긴다.
2. Action을 실행한다.
3. Middleware 
4. 실행된 Action 을 통해 State 가 변화된다.

### Store

- `createStore( reducer, initialState: object )`;

### Actions

- 액션은 함수로 보통 선언되지만 액션은 `객체` 이다. 함수로 return 되는 객체가 액션이다. 액션을 동적으로 만들어 내기 위해 함수를 사용하는 것이다. ( Action Creator )