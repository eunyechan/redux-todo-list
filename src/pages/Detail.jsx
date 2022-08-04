import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailTopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const DetailTopTitle = styled.span`
  font-size: 90px;
  font-weight: bold;
`;

const DetailWrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 5px solid black;
  border-radius: 10px;
  padding: 10px;
`;

const DetailTitleContainer = styled.div`
  width: 100%;
  margin-top: 70px;
  font-size: 25px;
  font-weight: 600;
`;

const DetailTitle = styled.span`
  font-size: 25px;
`;

const DetailInfo = styled.span`
  font-size: 25px;
`;

const DetailBtnContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const DetailBtn = styled.button`
  border-radius: 50%;
  border: 5px solid black;
  background-color: transparent;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
`;

function Detail() {
  const location = useLocation();
  const goback = useNavigate();
  const todo = location.state;

  return (
    <>
      <DetailContainer>
        <DetailTopContainer>
          <DetailTopTitle>Detail Page</DetailTopTitle>
        </DetailTopContainer>
        <DetailWrapper style={{ position: "relative" }}>
          <DetailBtnContainer>
            <DetailBtn onClick={() => goback(-1)}>⇚</DetailBtn>
          </DetailBtnContainer>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: "40px", fontWeight: "bold" }}>
              {todo.title}
            </span>
          </div>
          <DetailTitleContainer>
            <DetailTitle>{todo.title}</DetailTitle>
          </DetailTitleContainer>
          <DetailTitleContainer>
            <DetailInfo>{todo.info}</DetailInfo>
          </DetailTitleContainer>
        </DetailWrapper>
      </DetailContainer>
    </>
  );
}

export default Detail;
