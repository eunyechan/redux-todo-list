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
  align-items: center;
  justify-content: center;
`;

const InputFormWrapper = styled.form`
  width: 100%;
  height: 100%;
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateButton = styled.button`
  width: 120px;
  height: 90px;
  border: none;
`;

const ToDoItemContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ToDoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <ToDoItemContainer>
      <input
        type={"checkbox"}
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          marginRight: "200px",
        }}
      >
        {todo.title}
      </span>
      <span>{todo.info}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </ToDoItemContainer>
  );
};

function InputForm({
  inputTitle,
  inputInfo,
  todos,
  onChangeTitleInput,
  onChangeInfoInput,
  onInsert,
  onToggle,
  onRemove,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(inputTitle, inputInfo);
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
              <Input value={inputTitle} onChange={onChangeTitle} />
            </InputSpanDiv>
            <InputSpanDiv>
              <InputSpan>내용</InputSpan>
              <Input value={inputInfo} onChange={onChangeInfo} />
            </InputSpanDiv>
            <ButtonContainer>
              <CreateButton>작성하기</CreateButton>
            </ButtonContainer>
            <div>
              {todos.map((todo) => {
                return (
                  <ToDoItem
                    todo={todo}
                    key={todo.id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                  />
                );
              })}
            </div>
          </InputFormWrapper>
        </InputContainer>
      </InputFormWrpper>
    </>
  );
}

export default InputForm;
