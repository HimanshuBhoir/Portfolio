import React, { useRef } from 'react'
import styled from 'styled-components';
import ExperienceCard from './components/ExperienceCard';
import Header from '../../components/header';
import { ExperienceList } from './components/List';
import Textfit from 'react-textfit';
import { TypeAnimation } from 'react-type-animation';

function index({ sectionRefs }) {
  const scrollRef = useRef(null);
  const lines = [
    "In every line of code lies the potential to redefine the future.",
    "Design isn’t just aesthetics; it's the storyteller of functionality.",
    "Teamwork: where diverse beats harmonize into the symphony of success.",
    "Coding is the language that translates imagination into innovation.",
    "Design is the intersection where creativity meets usability.",
    "Leadership isn’t about titles; it's about inspiring action and fostering growth.",
    "Teamwork is the fusion of minds shaping ideas into realities.",
    "Coding: where logic dances with creativity, scripting the technological ballet.",
    "Design speaks the unspoken, connecting emotion with functionality."
  ]

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Experience: el };
        scrollRef.current = el;
      }}
    >
      <Header SectionName="Experience" />
      <ExperienceContainer>
        <SpellContainer>
          <Textfit>
          <Spell> <TypeAnimation sequence={lines} speed={20} wrapper = "div" /> </Spell>
          </Textfit>
        </SpellContainer>
        <CardContainer>
          {ExperienceList.map((exp, idx) => {
            return (
              <ExperienceCard
                key={idx}
                title={exp.company}
                position={exp.position}
                companyImage={exp.companyImage}
                description={exp.description}
                timeline={exp.timeline}
                stack={exp.skills}
              />
            );
          })}
        </CardContainer>
      </ExperienceContainer>
    </Container>
  )
}

export default index;

const Container = styled.section`
  width: 100%;
`;

const ExperienceContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SpellContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  padding: 1vh 0 1vh;
  padding-left: 2vw;
  padding-right: 2vw;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Spell = styled.span`
  display: inline-block;
  font-family: "Neue Montreal";
  font-size: 3vw;
  font-weight: 300;
  line-height: 1.2;
  background-color: #504f4f;

  color: #ffffffb4;

  &.pink {
    display: flex;
  }
`;

const CardContainer = styled.div`
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
`
