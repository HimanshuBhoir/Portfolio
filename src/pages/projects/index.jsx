import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { focusedSectionAtom } from '../skills/atoms/index';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { ExperienceList } from './List';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import ProjectCard from './components/ProjectCard';
import Header from '../../components/header';

function index({ sectionRefs }) {
  const scrollRef = useRef(null);
  const THRESHOLD = 0.9;
  const sectionEntry = useIntersectionObserver(scrollRef, { threshold: 0.9 });
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);

  // useEffect(() => {
  //   if (sectionEntry?.intersectionRatio > THRESHOLD) {
  //     setFocusedSection(0);
  //   }
  // }, [sectionEntry, setFocusedSection]);

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Projects: el };
        scrollRef.current = el;
      }}
    >
      <Header SectionName="Projects" />
      <ProjectContainer>
        <SpellContainer>
          <Spell>Everyone can spell the code,</Spell>
          <Spell className="pink">
            But not everyone can write the&nbsp;
          </Spell>
        </SpellContainer>
        <CardContainer>
          {ExperienceList.map((prj, idx) => {
            return (
              <ProjectCard
                key={idx}
                title={prj.company}
                description={prj.timeline}
                // repolink={prj.repolink}
                stack={prj.skills}
                reverse={idx % 2 === 0}
              />
            );
          })}
        </CardContainer>
      </ProjectContainer>
    </Container>
  )
}

export default index;

const Container = styled.section`
  width: 100%;
`;

const ProjectContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  font-size: 4.3vw;
  font-weight: 400;
  line-height: 1.2;

  color: white;

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