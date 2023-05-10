import styled, { keyframes} from "styled-components";

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




export const HomeTitle = styled.h1`
  font-size: 39px;
  line-height: 45px;
  width: 55%;
  cursor: default;

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
`;
