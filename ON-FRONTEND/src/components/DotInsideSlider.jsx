import styled from 'styled-components';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function DotInslideSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <SliderContainer {...handlers}>
        <SliderWrapper currentSlide={currentSlide}>
          {images.map((image, index) => (
            <Slide
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </SliderWrapper>
        <DotContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotContainer>
      </SliderContainer>
    </>
  );
}

export default DotInslideSlider;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  height: 172px;
`;

const SliderWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['currentSlide'].includes(prop),
})`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => `translateX(-${props.currentSlide * 100}%)`};
  position: relative; /* Added to contain absolutely positioned elements */
  height: 100%; /* Ensure it takes full height of the container */
`;

const Slide = styled.div`
  min-width: 100%;
  height: 172px;
  background-size: cover;
  background-position: center;
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

const Dot = styled.div.withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})`
  width: ${(props) => (props.active ? '8px' : '5px')};
  height: ${(props) => (props.active ? '8px' : '5px')};
  margin: ${(props) => (props.active ? '0 5px' : '2px 5px')};
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#FFFFFF' : '#D9D9D9')};
  opacity: ${(props) => (props.active ? '1' : '0.5')};
  cursor: pointer;
  pointer-events: auto; /* Allows clicking on dots */
`;
