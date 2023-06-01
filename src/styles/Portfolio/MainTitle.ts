import styled, { keyframes } from "styled-components"

const burstAnimation = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const MainTitle = styled.h1`
    color: #f0f8ff;
    font-size: 30px;
    span {
    position: relative;
    color: #f0f8ff;
    transition: all .3s ease-out
  }

  span:hover {
    color: rgb(255, 204, 0);
    animation: ${burstAnimation} 1s ease-in-out infinite;
    cursor: default;
  }
  
    @media (min-width: 768px) {
        font-size: 40px;
    }
    @media (min-width: 1440px){
        font-size: 60px;
    }
`