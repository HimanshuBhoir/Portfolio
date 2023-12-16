import React, { useRef } from 'react'
import styled from 'styled-components';
import Header from '../../components/header';
import EducationCard from './components/EducationCard';
import { EducationList } from './components/List';

function index({ sectionRefs }) {

  const scrollRef = useRef(null);

  return (
    <Container
      ref={(el) => {
      sectionRefs.current = { ...sectionRefs.current, Education: el };
      scrollRef.current = el;
    }}
    >
      <Header SectionName={'Education'}/>
      <EducationContainer onc>
        {EducationList.map((edu, idx) => (
          <CardContainer key={idx}>
            <EducationCard
              college={edu.college}
              mode={edu.mode}
              timeline={edu.timeline}
              gpa={edu.gpa}
            />
          </CardContainer>
        ))}
      </EducationContainer>
    </Container>
  )
}

export default index;

const Container = styled.section`
  width: 100%;
`;

const EducationContainer = styled.div`
  padding: 5vw;
  width: 90%;
  display: grid;
  gap: 2vw;
`;

const CardContainer = styled.div``;
