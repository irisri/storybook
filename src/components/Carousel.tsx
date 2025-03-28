import cat1 from '../assets/pexels-kmerriman-20787.jpg';
import cat2 from '../assets/pexels-pixabay-208984.jpg';
import cat3 from '../assets/pexels-pixabay-69932.jpg';
import cat4 from '../assets/pexels-kirsten-buhne-682055-1521306.jpg';
import cat5 from '../assets/pexels-didsss-1276553.jpg';

import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from './Button';
import { colors } from './colors';

const IMAGES = [cat1, cat2, cat3, cat4, cat5];

const StyledCarouselDiv = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  position: relative;
  /* &::before,
  &::after {
    box-sizing: border-box;
  } */
`;

const StyledImg = styled.img`
  height: 100%;
  /* aspect-ratio: 10 / 6; */
  width: 100%;
  object-fit: cover;
  display: block;
  margin-bottom: 20px;
`;

const StyledCarouselButtoon = styled(Button)`
  position: absolute;
  display: block;
  top: 50%;
  /* bottom: 0; */
  background-color: transparent;
  border: none;
  margin: 0 16px;
  &:first-of-type {
    left: 0;
  }
  &:last-of-type {
    right: 0;
  }
`;

type CarouselProps = {
  imageUrls: string[];
};

export const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((prevState) => {
      if (imageIndex === IMAGES.length - 1) return 0;
      return prevState + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((prevState) => {
      if (imageIndex === 0) return IMAGES.length - 1;
      return prevState - 1;
    });
  };

  return (
    <StyledCarouselDiv>
      <StyledImg src={IMAGES[imageIndex]} />
      <StyledCarouselButtoon onClick={showPrevImage} iconName={'arrow-left'} variant='primary' />
      <StyledCarouselButtoon onClick={showNextImage} iconName={'arrow-right'} variant='primary' />
    </StyledCarouselDiv>
  );
};
