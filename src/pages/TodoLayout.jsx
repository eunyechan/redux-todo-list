import styled from "styled-components";
import Header from "../components/header/Header";
import ToDo from "../components/todo/ToDo";

const TodoLayoutContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
`;

function TodoLayout() {
  return (
    <TodoLayoutContainer>
      <Header />
      <ToDo />
    </TodoLayoutContainer>
  );
}
export default TodoLayout;
