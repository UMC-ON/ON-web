import styled from 'styled-components';

export const ChatLayout = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 480px;
  display: flex;
  box-sizing: border-box;
  padding: 61px 0px 0px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 6.125px;
  z-index: 0;
  background-image: ${({ backgroundImageUrl }) => `url(${backgroundImageUrl})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: 100%;
`;

export const ChatWrapper = styled.div`
  z-index: 1;
  width: 100%;
  padding: 2.25rem 1.5rem 0 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
