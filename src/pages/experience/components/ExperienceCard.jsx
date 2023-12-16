// import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
// import parseGithubURL from "@utils/parseGithubURL";
import styled from "styled-components";

function ProjectCard({ title, description, stack, timeline, companyImage }) {
  const handleCardClick = () => {};

  return (
    <BigContainer>
      <MainWrapper onClick={handleCardClick}>
        <Description>

          <Title>
            {title}
          </Title>

          <Section>

            <InfoSection>
                <SubTitle>
                    <Position> Project Head Web Development </Position>
                    <Time>{timeline}</Time>
                </SubTitle>
                <HorizontalBar />
                <Desc>{description}</Desc>
                <StackTitle>Skills</StackTitle>
                <StackContainer>
                    {stack.map((el, idx) => {
                    return <Stack key={idx}>{el}</Stack>;
                    })}
                </StackContainer>
            </InfoSection>

            <ImageSection>
                <a href="https://gdsc.community.dev/mgms-college-of-engineering-and-technology-navi-mumbai//" target="_blank" rel="noopener noreferrer">
                <Image src={`/companies/${companyImage}`} alt="Google Developer Student Club" />
                </a>
            </ImageSection>


          </Section>

            

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
  background-color: black;
  color: #ffffffb4;
`;

const Description = styled.div`
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
  /* padding: 5px; */
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 4vw;
  line-height: 5vw;

  overflow: hidden;
`;

const Section = styled.div`
    display: flex;
    justify-content: space-around;
`;

const InfoSection = styled.div`
    width: 50vw;
`;

const ImageSection = styled.div`
    margin: 0 5vw ;
    width: 20vw;
    /* object-fit: cover; */
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 25px;
    opacity: 0.8;
    &:hover{
        opacity: 0.3;
    }
`;

const SubTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  
  line-height: 2vw;
  overflow: hidden;
`;

const Position = styled.h4`
    font-size: 2vw;
`;

const Time = styled.h6`
`;

const HorizontalBar = styled.hr`
  width: 100%;
  height: 3px;

  margin: 0%.5 0;

  background-color: #ffffffb4;
`;

const Desc = styled.p`
  font-size: 1.1vw;
  line-height: 1.6vw;
  margin-top: 2vw;
  margin-bottom: 1vw;
`;

const StackTitle = styled.h3`
  font-weight: 100;
  font-size: 2vw;
  margin-bottom: 1vw;
`;

const StackContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Stack = styled.li`
  padding: 5px;
  font-weight: 300;
  font-size: 1vw;
`;