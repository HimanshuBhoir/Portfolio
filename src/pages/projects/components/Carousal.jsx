import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

function Carousal() {
  //FIXME: Handle Resize Event?
  const arr = ["technique", "understanding", "creativity", "knowledge"];

  const options = {
    autoPlay: true,
    axis: "vertical",
    interval: 5000,
    transitionTime: 500,
    infiniteLoop: true,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    stopOnHover: false,
    swipeable: false,
    showThumbs: false,
    dynamicHeights: true,
  };

  return (
    <Container>
      <Carousel {...options}>
        {arr.map((el, idx) => {
          return (
            <Span key={idx} transformOffset={idx}>
              {el}
            </Span>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Carousal;

const Container = styled.div`
  width: 20vw;

  overflow: hidden;
  position: relative;

  padding: 0 5px;

  background-color: #ffffffb4;
  color: black;
`;

const Span = styled.span`
  /* width: 100%; */
`;