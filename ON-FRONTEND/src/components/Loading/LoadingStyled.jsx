import styled, { keyframes } from 'styled-components';

export const PageWrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  max-width: 480px;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const moveX = keyframes`
  0% {  transform: translate(-43.3vw, 25vw); }
  50% { transform: translate(0, 0); } 
  100% { transform: translate(43.3vw, -25vw); }
`;

export const SvgContainer = styled.svg`
  width: 180px;
  height: 180px;
  overflow: hidden;
`;

const plane_cubic = 'cubic-bezier(0.4, 0, 0.2, 1)';
const line_cubic = 'cubic-bezier(0.65, 0.05, 0.36, 1)';
const duration = '2.8s';
export const Circle = styled.circle``;

export const Path = styled.path`
  &:nth-child(2) {
    animation: ${moveX} ${duration} ${plane_cubic} infinite;
  }

  &:nth-child(3) {
    animation: ${moveX} ${duration} ${plane_cubic} infinite;
  }

  &:nth-child(4) {
    animation: ${moveX} ${duration} ${plane_cubic} infinite;
  }
`;

export const Line = styled.path`
  &:nth-child(5) {
    animation: ${moveX} ${duration} ${line_cubic} infinite;
    animation-delay: 125ms;
  }

  &:nth-child(6) {
    animation: ${moveX} ${duration} ${line_cubic} infinite;
    animation-delay: 25ms;
  }

  &:nth-child(7) {
    animation: ${moveX} ${duration} ${line_cubic} infinite;
    animation-delay: 75ms;
  }
`;
const fadeInOut = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
`;

export const LoadingText = styled.p`
  color: #5e5e5e;
  text-align: center;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.0175rem;
  margin-top: 1.5rem;
  animation: ${fadeInOut} ${duration} infinite;
`;
