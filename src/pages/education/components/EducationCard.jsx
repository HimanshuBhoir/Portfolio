import styled from "styled-components";

function EducationCard({ college, mode, gpa, timeline}) {

  return (
    <BigContainer>
      <MainWrapper>
        <Description>
          <Title>
            <span>{mode} - {timeline}</span>
          </Title>
          <Desc>{college}  [ {gpa} ]</Desc> 
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
  flex-direction: ${(props) => (props.reverseOrder ? "row" : "row-reverse")};
  background-color: black;
  color: #ffffffb4;
`;

const Description = styled.li`
  width: 100%;

  margin-bottom: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2vh;
  
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

const Desc = styled.p`
  font-size: 2vw;
  line-height: 2vw;
  letter-spacing: 0.5px;
  text-align: justify;
`;

const Light = styled.p`
  opacity: 0.8;
`;