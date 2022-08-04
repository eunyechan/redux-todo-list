import { useNavigate } from "react-router-dom";
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

const InputFormWrpper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputFormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f8ebb1d8;
  border-radius: 10px;
`;

const InputSpanDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;
const InputSpan = styled.span`
  margin: 20px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 10px;
  border: none;
`;

const ButtonContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  &:after {
    content: "";
    height: 100%;
    width: 100%;
    padding: 4px;
    position: absolute;
    bottom: -15px;
    left: -4px;
    z-index: -1;
    background-color: #2b1800;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
`;

const CreateButton = styled.button`
  color: white;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  background-color: #ffa12b;
  display: block;
  position: relative;
  padding: 10px 30px;
  border-radius: 10px;
  cursor: pointer;
  &:active {
    top: 10px;
    background-color: #f78900;
    box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
  }
`;

const ToDoItemContainer = styled.div`
  display: grid;
  height: 100%;
  max-width: 1200px;
  min-width: 800px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 15px;
  padding: 20px;
`;

const ToDoItemWrapper = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;
`;

const ToDoItemTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 20px;
  font-weight: bold;
`;

const ToDoItemInfo = styled.span`
  font-size: 18px;
  padding: 20px;
`;

const ToDoItemButtonList = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
  padding-right: 10px;
`;

const ToDoItemDetailButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  font-weight: bold;
  margin: 10px;
  border: 1px solid black;
  background-color: transparent;
  cursor: pointer;
`;
const ToDoItemDoneInput = styled.input`
  cursor: pointer;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;
  border-radius: 10px;
`;
const ToDoItemDeleteButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 24px;
  border: 1px solid transparent;
  background-color: white;
  color: red;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: white;
  }
`;

// ToDoItem
const ToDoItem = ({
  todo,
  onToggle,
  onRemove,
  onUpdate,
  onChangeTitleInput,
  onChangeInfoInput,
}) => {
  const navigate = useNavigate();

  const moveDetail = () => {
    onChangeTitleInput("");
    onChangeInfoInput("");
    navigate(`/detail${todo.id}`, {
      state: {
        id: todo.id,
        title: todo.title,
        info: todo.info,
        done: todo.done,
      },
    });
  };

  return (
    <>
      <ToDoItemWrapper
        style={{
          backgroundColor: todo.done ? "#eeeeee26" : "#f8f1cedf",
          border: todo.done ? "3px solid white" : "3px solid black",
        }}
      >
        <ToDoItemDetailButton
          style={{
            opacity: todo.done ? "0" : "1",
            pointerEvents: todo.done ? "none" : "auto",
          }}
          onClick={moveDetail}
        >
          상세히보기
        </ToDoItemDetailButton>
        <ToDoItemTitle
          style={{
            textDecoration: todo.done ? "line-through" : "none",
          }}
        >
          {todo.title}
        </ToDoItemTitle>
        <hr style={{ width: "100%" }} />
        <ToDoItemInfo
          style={{
            textDecoration: todo.done ? "line-through" : "none",
          }}
        >
          {todo.info}
        </ToDoItemInfo>
        <ToDoItemButtonList>
          <ToDoItemDoneInput
            type={"button"}
            onClick={() => onToggle(todo.id)}
            checked={todo.done}
            readOnly={true}
            value={todo.done ? "⭕" : "✔"}
          />
          <ToDoItemDeleteButton onClick={() => onRemove(todo.id)}>
            x
          </ToDoItemDeleteButton>
        </ToDoItemButtonList>
      </ToDoItemWrapper>
    </>
  );
};

// InpurForm
function InputForm() {
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

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(title, info);
    onChangeTitleInput("");
    onChangeInfoInput("");
  };

  const onChangeTitle = (e) => {
    onChangeTitleInput(e.target.value);
  };

  const onChangeInfo = (e) => {
    onChangeInfoInput(e.target.value);
  };

  return (
    <>
      <InputFormWrpper>
        <InputContainer>
          <InputFormWrapper onSubmit={onSubmit}>
            <InputSpanDiv>
              <InputSpan>제목</InputSpan>
              <Input
                required
                maxLength={15}
                value={title}
                onChange={onChangeTitle}
              />
            </InputSpanDiv>
            <InputSpanDiv>
              <InputSpan>내용</InputSpan>
              <Input
                required
                maxLength={30}
                value={info}
                onChange={onChangeInfo}
              />
            </InputSpanDiv>
            <ButtonContainer>
              <CreateButton>작성하기</CreateButton>
            </ButtonContainer>
          </InputFormWrapper>
          <h1
            style={{ fontSize: "45px", marginTop: "40px", fontWeight: "bold" }}
          >
            -LIST-
          </h1>
          <br />
          <div
            style={{
              maxWidth: "1200px",
              minWidth: "800px",
            }}
          >
            <ToDoItemContainer>
              {todos.map((todo) => {
                return (
                  <ToDoItem
                    onChangeInfoInput={onChangeInfoInput}
                    onChangeTitleInput={onChangeTitleInput}
                    inputTitle={title}
                    todo={todo}
                    key={todo.id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                  />
                );
              })}
            </ToDoItemContainer>
          </div>
        </InputContainer>
      </InputFormWrpper>
    </>
  );
}

export default InputForm;
