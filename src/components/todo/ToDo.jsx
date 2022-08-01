import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  changeTitleInput,
  insert,
  toggle,
  remove,
  update,
  changeInfoInput,
} from "../../redux/modules/inputvalue";
import styled from "styled-components";
import InputForm from "../inputform/InputForm";

const ToDoContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-width: 800px;
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
  const onUpdate = useCallback(
    (id, content) => dispatch(update(id, content)),
    [dispatch]
  );
  console.log(onUpdate);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  return (
    <>
      <ToDoContainer>
        <InputForm
          inputTitle={title}
          inputInfo={info}
          todos={todos}
          onChangeTitleInput={onChangeTitleInput}
          onChangeInfoInput={onChangeInfoInput}
          onInsert={onInsert}
          onToggle={onToggle}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      </ToDoContainer>
    </>
  );
}

export default ToDo;
