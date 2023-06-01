import styled from "styled-components";

export const SpheroSmall = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 300px;
  left: 230px;
  @media (min-width: 768px) {
    left: 340px;
    top: 340px;
  }
  @media (min-width: 1440px){
    left: 470px;
    top: 214px;
    width: 100px;
    height: 100px;
  }
`;
