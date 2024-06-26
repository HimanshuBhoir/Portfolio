import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import profileImage from '../../assets/images/Himanshu_-_Profile-removebg-preview.png';
import { MouseContext } from '../../context/MouseContext';
import { motion } from 'framer-motion';

function Profile() {
  
  const { cursorChangeHandler } = useContext(MouseContext);

  const cursorChangeLinkedInHandler = useCallback(() => {
    cursorChangeHandler("LinkedIn");
    // console.log('enter')
  }, [cursorChangeHandler]);

  const cursorChangeEmptyHandler = useCallback(() => {
    cursorChangeHandler("");
    // console.log('out')
  }, [cursorChangeHandler]);

  return (
    <ProfileContainer onMouseEnter={cursorChangeLinkedInHandler} onMouseLeave={cursorChangeEmptyHandler}>
      {/* <a href="https://www.linkedin.com/in/himanshu-bhoir-34a9a01b9/" target="_blank" rel="noopener noreferrer"> */}
        <ProfileImage onClick={() => window.open('https://www.linkedin.com/in/himanshu-bhoir-34a9a01b9/','_blank')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} />
      {/* </a> */}

    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  vertical-align: center;
  cursor: none;
  width: 25vw;
  @media (max-width: 450px){
    height: 30%;
    width: 30%;
  }
`;

const ProfileImage = styled(motion.div)`
  height: 50vh;
  vertical-align: center;
  background-image: url(${profileImage});
  background-size: cover ;
  background-position: center;
  filter: saturate(10%);
  transition: filter 3s ease-in-out;
  &:hover{
    filter: saturate(100%);
  }
  @media (max-width: 450px){
    height: 20vh;
    width: 40vw;
  }
`;
