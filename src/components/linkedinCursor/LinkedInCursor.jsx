import { FaLinkedinIn } from "react-icons/fa6";
import { MouseContext } from '../../context/MouseContext';
import useMousePosition from '../../hooks/useMousePosition';
import { memo, useContext } from 'react';
import styled, { css } from 'styled-components';

function LinkedInCursor() {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  const isHovered = cursorType === 'LinkedIn';

  return (
    <Ring style={{ top: `${y}px`, left: `${x}px` }} linkedinhovered={isHovered}>
      {isHovered && <FaLinkedinIn size={20} color="white" />}
    </Ring>
  );
}

export default memo(LinkedInCursor);

const Ring = styled.div`
  pointer-events: none;
  cursor: none;
  position: fixed;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-out, height 0.2s ease-out;
  will-change: width, height, transform, border;
  z-index: 999;
  width: ${(props) => (props.linkedinhovered ? '30px' : '0')};
  height: ${(props) => (props.linkedinhovered ? '30px' : '0')};
`;