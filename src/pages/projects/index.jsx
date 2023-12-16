import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ProjectList } from './components/List';
import ProjectCard from './components/ProjectCard';
import Header from '../../components/header';
import Carousal from './components/Carousal';

function index({ sectionRefs }) {
  const scrollRef = useRef(null);

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Projects: el };
        scrollRef.current = el;
      }}
    >
      <Header SectionName="Project" />
      <SpellContainer>
          <Spell>Learning code is the start,</Spell>
          <Spell className="pink">
            but perfecting the  &nbsp;
            <Carousal /> &nbsp;
            is the journey.
          </Spell>
        </SpellContainer>
      <ProjectContainer onc>
        {ProjectList.map((prj, idx) => (
          <CardContainer key={idx}>
            <ProjectCard
              title={prj.company}
              timeline={prj.timeline}
              description={prj.description}
              stack={prj.skills}
              github={prj.github}
            />
          </CardContainer>
        ))}
      </ProjectContainer>
    </Container>
  );
}

export default index;

const Container = styled.section`
  width: 100%;
`;

const ProjectContainer = styled.div`
  padding: 5vw;
  width: 90%;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 5vw;
`;

const CardContainer = styled.div`
  /* padding: 0; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;

const SpellContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  padding: 4vh 0 8vh;
  padding-left: 5vw;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Spell = styled.span`
  display: inline-block;
  font-family: "Neue Montreal";
  font-size: 3vw;
  font-weight: 400;
  line-height: 4vw;

  color: #ffffffb4;

  &.pink {
    display: flex;
  }
`;
