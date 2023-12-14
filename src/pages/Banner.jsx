import React from 'react'
import styled from 'styled-components';

function Banner() {
  return (
    <Load>
        Preloader
    </Load>
  )
}

export default Banner;

const Load = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
`;
