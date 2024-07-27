import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const SliderWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['currentSlide'].includes(prop),
})`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => `translateX(-${props.currentSlide * 100}%)`};
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 100px;
  background-size: cover;
  background-position: center;
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1vh;
`;

export const Dot = styled.div.withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})`
  width: ${(props) => (props.active ? '8px' : '5px')};
  height: ${(props) => (props.active ? '8px' : '5px')};
  margin: ${(props) => (props.active ? '0 5px' : '2px 5px')};
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#9D9AB1' : '#6EBAFF')};
  opacity: ${(props) => (props.active ? '1' : '0.5')};
  cursor: pointer;
`;
