import styled, { keyframes } from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleAnimation = keyframes`
  0%,80% {
    transform: rotateY(360deg) 
  }
`;

const HeaderTitle = styled.span`
  position: relative;
  display: inline-block;
  color: #000;
  text-transform: uppercase;
  animation: ${TitleAnimation} 3s infinite;
  font-size: 4em;
  font-weight: bold;
  letter-spacing: 10px;
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>t</HeaderTitle>
        <HeaderTitle>o</HeaderTitle>
        <HeaderTitle>d</HeaderTitle>
        <HeaderTitle>o</HeaderTitle>
      </HeaderContainer>
    </>
  );
}
export default Header;
