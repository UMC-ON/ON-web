import { useSwipeable } from 'react-swipeable';
import { useState } from 'react';
import * as s from './CustomSliderStyled.jsx';

const CustomSlider = ({ images, height }) => {
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
      <s.SliderContainer {...handlers}>
        <s.SliderWrapper currentSlide={currentSlide}>
          {images.map((image, index) => (
            <s.Slide
              key={index}
              style={{ backgroundImage: `url(${image})`, height: '172px' }}
            />
          ))}
        </s.SliderWrapper>
      </s.SliderContainer>
      <s.DotContainer>
        {images.map((_, index) => (
          <s.Dot
            key={index}
            active={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </s.DotContainer>
    </>
  );
};

export default CustomSlider;
