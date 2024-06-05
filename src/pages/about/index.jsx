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
  height: 100%;

  display: flex;
  flex-direction: column;

  color: white;
  background-color: black;
  @media (max-width: 450px){
    height: 100%;
  }
`;

const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 450px){
    display: block;
  }
  `;

const Description = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  padding: 2vw;
`;