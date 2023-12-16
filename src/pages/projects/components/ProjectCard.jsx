import styled from "styled-components";
import { Textfit } from 'react-textfit';

function ProjectCard({ title, description, stack, timeline, github }) {

  return (
    <BigContainer>
      <MainWrapper onClick={() => window.open(github)}>
        <Description>
          <Title>
            <span>{title}</span>
          </Title>
          <HorizontalBar />
          <TimeLine>{timeline}</TimeLine>
          <Desc>{description}</Desc>
          <StackTitle>Stack</StackTitle>
          <Textfit>
            <StackContainer>
              {stack.map((el, idx) => {
                return <Stack key={idx}>{el}</Stack>;
              })}
            </StackContainer>
          </Textfit>
        </Description>
      </MainWrapper>
    </BigContainer>
  );
}

export default ProjectCard;

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
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Description = styled.div`
  width: 100%;

  margin-bottom: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2vh;
  opacity: 0.7;
  &:hover{
    opacity: 1;
  }
`;

const Title = styled.h3`
  position: relative;
  font-weight: 400;
  line-height: 3.5vw;
  letter-spacing: 1px;
  font-size: 3vw;
  opacity: 1;
  overflow: hidden;
`;

const TimeLine = styled.p`
  font-size: 1.3vw;
  line-height: 1;
  letter-spacing: 0.5px;
`;

const Desc = styled.p`
  font-size: 1.3vw;
  line-height: 1.5vw;
  letter-spacing: 0.5px;
  text-align: justify;
`;

const HorizontalBar = styled.hr`
  width: 100%;
  height: 3px;
  margin: -1vh 0;
  position: relative;
  background-color: #ffffffb4;
`;

const StackTitle = styled.h3`
  font-weight: 100;
  font-size: 1.8vw;
`;

const StackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  grid-gap: 1vmax;
`;

const Stack = styled.h5`
  font-weight: 100;
  font-size: 1.3vw;
  padding: 2px;
`;