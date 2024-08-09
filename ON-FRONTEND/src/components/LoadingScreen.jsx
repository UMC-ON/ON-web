import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import londonLoading from '../assets/images/londonLoading.svg';
import newyorkLoading from '../assets/images/newyorkLoading.svg';
import tokyoLoading from '../assets/images/tokyoLoading.svg';
import parisLoading from '../assets/images/parisLoading.svg';
import loadingCircle from '../assets/images/loadingCircle.svg';

const images = [londonLoading, newyorkLoading, tokyoLoading, parisLoading];

function LoadingScreen() {
    const [randomImage, setRandomImage] = useState(null); 

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomImage(images[randomIndex]);

        return () => {
            
        };
    }, []); 

    return (
        <>
            <LoadImage src={randomImage}/>
            <LoadCircle src={loadingCircle}/>
        </>
    );
}

export default LoadingScreen;

const LoadImage = styled.img`
  margin: 0 auto;
  margin-top: 20vh;
`;

const LoadCircle = styled.img`
  margin: 0 auto;
  margin-top: 5vh;
  display: block;
  animation: rotate 3s linear infinite;
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);   
    }
    to {
      transform: rotate(360deg);  
    }
  }
`;
