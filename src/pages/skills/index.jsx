import React, { useEffect, useRef, useState } from 'react'
import styled , { css } from 'styled-components';
import useSingleEffect from '../../hooks/useSingleEffect';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Header from '../../components/header';
import { Lines } from './SkillList';
import { useSetRecoilState } from 'recoil';
import { focusedSectionAtom } from './atoms';
import { Textfit } from 'react-textfit';

const category = ['Language', 'Frontend', 'Backend', 'Tools', 'Qualities'];

const setColor = (prof) => {
  switch (+prof) {
    case 1:
      return "maroon";
    case 2:
      return "navy";
    case 3:
      return "green";
    default:
      return "olive";
  }
};


function index({ sectionRefs }) {

  const scrollRef = useRef(null);
  const THRESHOLD = 0.8;
  const setFocusedSection = useSetRecoilState(focusedSectionAtom);
  const [area, setArea] = useState(0);

  const sectionEntry = useIntersectionObserver(scrollRef, {
    threshold: THRESHOLD,
  });
  
  useEffect(() => {
    if (sectionEntry?.intersectionRatio > 0.9) {
      setFocusedSection(2);
    }
  }, [sectionEntry, setFocusedSection]);

  useSingleEffect(() => {
    setInterval(() => {
      setArea((prev) => (prev + 1) % 5);
    }, 5000);
  });

  return (
    <Container
      ref={(el) => {
        sectionRefs.current = { ...sectionRefs.current, Skills: el };
        scrollRef.current = el;
      }}
    >
      <Header SectionName="Skills" />
      <SkillsWrapper>
        <LanguagesContainer id="SkillsSection">
          <LanguageHeader>
            <Textfit mode="single">
              {category.map((el, idx) => {
                return (
                  <Category key={idx} isSelected={idx === area}>
                    {el}&nbsp;
                  </Category>
                );
              })}
            </Textfit>
          </LanguageHeader>
          {Lines.map((line, idx) => {
            return (
              <LineContainer key={idx}>
                <Textfit mode="single">
                  {line.map((lang, idx2) => {
                    return (
                      <TextWrapper
                        key={idx2}
                        prof={setColor(lang.prof)}
                        isSelected={lang.type === category[area]}
                      >
                        <Text isSelected={lang.type === category[area]}>
                          #{lang.name}
                        </Text>
                      </TextWrapper>
                    );
                  })}
                </Textfit>
              </LineContainer>
            );
          })}
        </LanguagesContainer>
      </SkillsWrapper>
    </Container>
  )
}

export default index;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SkillsWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5px;
`;

const LanguagesContainer = styled.div`
  width: 100%;
`;

const LanguageHeader = styled.div`
  width: 100%;
  height: 3vh;

  padding-bottom: 8vh;
`;

const Category = styled.span`
  display: inline-block;
  padding: 0 3vw;

  color: ${(props) => (props.isSelected ? "#ffffffb4" : "#232323")};
  transition: color 0.8s ease-in-out;
`;

const LineContainer = styled.div`
  width: 100%;
  height: 7vh;
  padding: 2vh 0;
`;

const TextWrapper = styled.div`
  display: inline-block;
  padding: 0 3vw;
  position: relative;
  line-height: 1.5;
  color: ${(props) => (props.isSelected ? '#ffffffb4' : props.prof)};
  background-color: ${(props) => (props.isSelected ? props.prof : 'initial')};
  transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
    background-color: ${(props) => props.prof};
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    opacity: 0;
  }

  ${(props) =>
    props.isSelected &&
    css`
      &::after {
        opacity: 1;
        transform: scaleX(1);
      }

      &:hover::after {
        transform: scaleX(1);
        background-color: initial;
      }
    `}
`;


const Text = styled.span`
  font-family: "Lato";
  font-weight: ${(props) => (props.isSelected ? 900: 100)};
  color: ${(props) => (props.isSelected ? '#ffffffb4' : props.prof)};
  opacity: ${(props) => (props.isSelected ? 1 : 0.3)};
  transition: color 0.8s ease-in-out;
`;