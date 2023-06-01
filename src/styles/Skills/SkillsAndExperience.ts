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



export const SkillsAndExperience = styled.h1`
    font-size: 32px;
    color: #f0f8ff;
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
    @media (min-width: 1440px){
        font-size: 55px;
    }
`