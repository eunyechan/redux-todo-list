import styled from "styled-components";
import InputForm from "../inputform/InputForm";

const ToDoContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-width: 800px;
`;

function ToDo() {
  return (
    <>
      <ToDoContainer>
        <InputForm />
      </ToDoContainer>
    </>
  );
}

export default ToDo;
