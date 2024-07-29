import styled from 'styled-components';
import React, {useState} from 'react';

import cameraIcon from '../assets/images/camera_icon.svg';

function CameraBottom() {
    return (
      <>
        <BottomTabLayout>
            <LeftButton src={cameraIcon}/>
        </BottomTabLayout>
      </>
    );
}

export default CameraBottom;

export const LeftButton = styled.img`
  position: absolute;
  left: 25px;
`;


const BottomTabLayout = styled.div`
  width: 100%;
  max-width: 480px;
  height: 87px;
  position: fixed;
  bottom: 0;
  border-radius: 14px 14px 0px 0px;
  border: 1px solid white;
  background: #ffffff;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 32px 30px 32px;
  box-shadow: 0px -1px 4px 4px #e2e2e2;
`;