//액션타입 정의, 액션타입 = 모듈이름/액션이름
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

//액션 생성 함수
export const changeInput = input =>({
    type: CHANGE_INPUT,
    input
});

let id = 4; // insert 가 호출 될 때마다 1씩 더해집니다.

export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        checked: false,
    }
  });

export const toggle =  id => ({
    type: TOGGLE,
    id 
});

export const remove =  id => ({
    type: REMOVE,
    id
})

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: true,
          },
          {
            id: 2,
            text: '컴포넌트 스타일링해 보기',
            checked: true,
          },
          {
            id: 3,
            text: '일정 관리 앱 만들어 보기',
            checked: false,
          },
    ],
  };

  function  todos(state = initialState, action){
      switch (action.type) {
        case CHANGE_INPUT:
            return {
                  ...state,
                  input: action.input
              };
        case INSERT:
            return {
                    ...state,
                    todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                    ...state,
                    todos: state.todos.map(todo => 
                        todo.id===action.id ? {...todo, checked: !todo.checked
                    } : todo)
                };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;    
      }
  }

  export default todos; 