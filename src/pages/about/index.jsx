import React, { useRef } from 'react';
import { LinkedInCursor } from '../../components/linkedinCursor'
import styled from 'styled-components';
import Introduction from './Introduction';
import Profile from './Profile';
import Header from '../../components/header';
import MouseContextProvider from '../../context/MouseContext';

function index( {sectionRefs} ) {

  const scrollRef = useRef(null);

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, "About": el };
        scrollRef.current = el;
      }}
    >
      <Header SectionName="About" />
      <ContentContainer>
      <Description>
        <MouseContextProvider>
          <Profile />
          <LinkedInCursor />
        </MouseContextProvider>
        </Description>
        <Description>
          <Introduction />
        </Description>
        
      </ContentContainer>
    </Container>
  )
}

export default index;

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  color: white;
  background-color: black;
`;

const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 2vw;
`;