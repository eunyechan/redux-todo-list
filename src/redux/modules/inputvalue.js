import uuid from "react-uuid";
const CHANGE_TITLE = "inputvalue/CHANGE_TITLE";
const CHANGE_INFO = "inputvalue/CHANGE_INFO";
const INSERT = "inputvalue/INSERT";
const TOGGLE = "inputvalue/TOGGLE";
const REMOVE = "inputvalue/REMOVE";
const UPDATE = "inputvalue/UPDATE";

export const changeTitleInput = (title) => ({
  type: CHANGE_TITLE,
  title,
});

export const changeInfoInput = (info) => ({
  type: CHANGE_INFO,
  info,
});

export const insert = (title, info) => ({
  type: INSERT,
  todo: {
    id: uuid(),
    title,
    info,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const update = (id, title) => ({
  type: UPDATE,
  id,
  title,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  title: "",
  info: "",
  todos: [],
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
    case UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, title: !todo.title } : todo
        ),
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
