import styled from "styled-components";

function Hero() {
  return (
    <Container>
      <HeroWrapper>
        <Line1>
          <div>
          Ї <Gray>c</Gray>ꍏn T<Gray>Hi</Gray>nꀘ<Gray>,</Gray>
          </div>
        </Line1>
        <Line2>
        <Blank></Blank>
          <div>
            <Gray>i</Gray> c<Gray>a</Gray>η <Gray>DΞ</Gray>šïg<Gray>ꋊ</Gray>,
          </div>
        </Line2>
        <Line3>
          <div>
          ɪ CĦ<Light>n</Light> 匚O<Light>dᗴ,</Light>
          </div>
        </Line3>
        <Line4>
        <Blank></Blank>
          <div>
          𝓲 <Gray>wi</Gray>ﾚﾚ i<Gray>𝚗𝚗</Gray>ₒᵥₐ<Gray>T</Gray>e.
          </div>
        </Line4>
      </HeroWrapper>
    </Container>
  );
}

export default Hero;

const Container = styled.section`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

const Line = styled.div`
  width: 100%;
  height: 25vh;
  flex-grow: 1;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Major Mono Display", sans-serif;
  font-weight: 600;
  line-height: 0;

  background-color: black;
  color: #ffffffb4;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: #ffffffb4;
    mix-blend-mode: difference;
    color: white;

    transform: scaleX(0);
    transition: transform 1.5s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Line1 = styled(Line)`
  font-size: 8vw;

  &:after {
    transform-origin: right center;
  }
`;

const Line2 = styled(Line)`
  font-size: 8vw;

  &:after {
    transform-origin: left center;
  }
`;

const Line3 = styled(Line)`
  font-size: 8vw;
  background-color: #504f4f;
  color: #ffffffb4;
  &:after {
    transform-origin: right center;
  }
`;

const Line4 = styled(Line)`
  font-size: 8vw;

  &:after {
    transform-origin: left center;
  }
`;

const Gray = styled.span`
  color: #504f4f;
`;

const Light = styled.span`
  color: #ffffff3f;
`;

const Blank = styled.div`
  width: auto;
`;