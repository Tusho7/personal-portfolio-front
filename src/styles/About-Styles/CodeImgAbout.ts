import styled from "styled-components";

export const CodeImgAbout = styled.img`
  width: 500px;
  height: 410px;
  position: absolute;
  top: 0px;
  left: 75px;
  filter: blur(5px);
  transform: scaleY(1.2);
  @media (min-width: 768px) {
    left: 270px;
    height: 550px;
    width: 600px;
    top: -100px;
  }
  @media (min-width: 1440px){
    left: 900px;
    width: 700px;
    height: 650px;
    top: -120px;
  }
`;
