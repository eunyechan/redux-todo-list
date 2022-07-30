// State들의 그룹
const CHANGE_TITLE = "inputvalue/CHANGE_TITLE";
const CHANGE_INFO = "inputvalue/CHANGE_INFO";
const INSERT = "inputvalue/INSERT";
const TOGGLE = "inputvalue/TOGGLE";
const REMOVE = "inputvalue/REMOVE";

export const changeTitleInput = (title) => ({
  type: CHANGE_TITLE,
  title,
});

export const changeInfoInput = (info) => ({
  type: CHANGE_INFO,
  info,
});

let id = 3;
export const insert = (title, info) => ({
  type: INSERT,
  todo: {
    id: id++,
    title,
    info,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  title: "",
  info: "",
  todos: [
    {
      id: 1,
      title: "리덕스 적응하기",
      info: "화이팅",
      done: true,
    },
    {
      id: 2,
      title: "리덕스 공부",
      info: "화이팅",
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case CHANGE_INFO:
      return {
        ...state,
        info: action.info,
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
