import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import profileImage from '../../assets/Himanshu_-_Profile-removebg-preview.png';
import { MouseContext } from '../../context/MouseContext';

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
        <ProfileImage onClick={() => window.open('https://www.linkedin.com/in/himanshu-bhoir-34a9a01b9/','_blank')}/>
      {/* </a> */}

    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: none;
  height: 100%;
  width: 25vw;
`;

const ProfileImage = styled.div`
  height: 100%;
  width: 100%;
  vertical-align: middle;
  background-image: url(${profileImage});
  background-size: cover ;
  background-position: center;
`;
