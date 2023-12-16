import './styles/global.css';
import './styles/reset.css';
import { useRef } from 'react';
import useIdle from './hooks/useIdle';
import useMediaQuery from './hooks/useMediaQuery';
import HeadConfig from './utils/Headconfig';
import styled from 'styled-components';
import Lottie from 'react-lottie-player';
import About from './pages/about';
import Experience from './pages/experience';
import Project from './pages/projects';
import Education from './pages/education';
import Skills from './pages/skills';
import Achievement from './pages/achievement';
import Hero from './pages/hero/Hero';


function App() {

  const sectionRefs = useRef([]);
  const showanimation = useIdle(5000);
  const isDesktop = useMediaQuery({
    query: 'min-width: 120px',
  })

  return (
      <Body>
        <HeadConfig />
          <>
            {isDesktop
             && (
              <LottiePlayer
                loop
                animationData={lottieScrollDown}
                play
                showanim={showanimation.toString()}
              />
            )
            }
            {/* <SmoothScroll /> */}
            <Wrapper>
              <Hero />
              <About sectionRefs={sectionRefs} />
              <Experience sectionRefs={sectionRefs} />
              <Project sectionRefs={sectionRefs} />
              <Skills sectionRefs={sectionRefs} />
              <Education sectionRefs={sectionRefs} />
              <Achievement sectionRefs={sectionRefs} />
            </Wrapper>
          </>
      </Body>
  );
}

export default App;

const Body = styled.div`
  position: relative;
`;

const Wrapper = styled.main`
  width: 100%;
  background-color: black;
`;

const LottiePlayer = styled(Lottie)`
  width: 125px;
  height: 125px;

  position: fixed;
  top: 85vh;
  right: 2vw;

  background-color: transparent;

  z-index: 100;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  ${(props) => {
    return props.showanim === "true"
      ? css`
          opacity: 1;
        `
      : null;
  }}

  path {
    stroke: white;
    fill: white;
  }
`;