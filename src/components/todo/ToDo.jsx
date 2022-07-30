import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  changeTitleInput,
  insert,
  toggle,
  remove,
  changeInfoInput,
} from "../../redux/modules/inputvalue";
import styled from "styled-components";
import InputForm from "../inputform/InputForm";

const ToDoContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

function ToDo() {
  const { title, info, todos } = useSelector(({ todos }) => ({
    title: todos.title,
    info: todos.info,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onChangeTitleInput = useCallback(
    (title) => dispatch(changeTitleInput(title)),
    [dispatch]
  );
  const onChangeInfoInput = useCallback(
    (info) => dispatch(changeInfoInput(info)),
    [dispatch]
  );
  const onInsert = useCallback(
    (title, info) => dispatch(insert(title, info)),
    [dispatch]
  );
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  return (
    console.log(title),
    console.log(info),
    (
      <>
        <ToDoContainer>
          <InputForm
            inputTitle={title}
            inputInfo={info}
            todos={todos}
            onChangeInfoInput={onChangeInfoInput}
            onChangeTitleInput={onChangeTitleInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        </ToDoContainer>
      </>
    )
  );
}

export default ToDo;
