import React from 'react'
import styled from 'styled-components';

function index({ SectionName }) {
  return (
    <Container>
      <HeadingWrapper>
        <HorizonalDivider />
        <Fonts>
        <H3>&lt;</H3><H2>{SectionName}</H2><H3>/&gt;</H3>
        </Fonts>
        <HorizonalDivider2 />
      </HeadingWrapper>
    </Container>
  )
}

export default index;

const Container = styled.figure`
  width: 100%;
  padding: 5vh 0 3vh;
  background-color: black;
  color: #ffffffb4;

`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Fonts = styled.div`
  flex-grow: 1;

  font-family: "Neue Montreal";
  font-weight: 500;
  line-height: 1;

  /* padding: 0 2.5vw; */

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;

  color: white;
`;

const H2 = styled.h2`
  font-size: 4vw;
  color: #ffffffb4;

`;

const H3 = styled.h2`
  font-size: 5vw;
  color: #ffffffb4;

`;

const HorizonalDivider = styled.hr`
  height: 0%;
  flex-grow: 6;
  background-color: transparent;
  border-top: 2px groove #ffffffb4;
`;

const HorizonalDivider2 = styled.hr`
  height: 0%;
  flex-grow: 6;
  background-color: transparent;
  border-top: 2px groove #ffffffb4;
`;