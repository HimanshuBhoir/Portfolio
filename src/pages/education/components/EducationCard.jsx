import styled from "styled-components";

function EducationCard({ college, mode, gpa, timeline }) {
  return (
    <BigContainer>
      <MainWrapper>
        <Time>{timeline}</Time>
        <LI><Circle /><Line /></LI>
        <Description>
          <Title>
            <span>{mode}  [ {gpa} ]</span>
          </Title>
          <Desc>{college}</Desc> 
        </Description>
      </MainWrapper>
    </BigContainer>
  );
}

export default EducationCard;

const BigContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: #ffffffb4;
  opacity: 0.7;
  transition: opacity 0.5s ease;
  &:hover{
    opacity: 1;
  }
`;

const Description = styled.div`
  width: 100%;
  margin-top: 1.5vw;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2vh;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ffffffb4;
    margin-bottom: 1vh;
  }
`;

const Title = styled.h3`
  position: relative;
  font-weight: 400;
  line-height: 3vw;
  letter-spacing: 1px;
  font-size: 2.5vw;
  opacity: 1;
  overflow: hidden;
`;

const Time = styled.h3`
  position: relative;
  width: 7vw;
  font-weight: 400;
  line-height: 3vw;
  letter-spacing: 1px;
  font-size: 2.5vw;
  opacity: 1;
  overflow: hidden;
`;

const Desc = styled.p`
  font-size: 2vw;
  line-height: 2vw;
  letter-spacing: 0.5px;
  text-align: justify;
  opacity: 0.7;
`;
const LI = styled.section`
  width: 5vw;
  height: auto;
  justify-content: center;
  /* margin-right: 5vw; */
  display: flex;
`;

const Circle = styled.section`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: #ffff;
  opacity: 1;
  position: absolute;
`;

const Line = styled.section`
  width: 0.5vw;
  height: auto;
  background-color: #ffffffb4;
`;
