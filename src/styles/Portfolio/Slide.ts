import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

interface SlideProps {
  visible: boolean;
  isCurrentSlide0: boolean;
}

export const Slide = styled.div<SlideProps>`
  transition: all 900ms cubic-bezier(0.88, 0, 0.265, 1) 600ms;
  transform: ${(props) => (props.visible ? "translateX(0)" : "translateX(100%)")};
  animation: ${(props) => (props.visible ? slideIn : slideOut)} 0.9s ease forwards;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 521.66px;

  @media (min-width: 768px) {
    align-items: ${(props) => (props.visible && props.isCurrentSlide0 ? "center" : "unset")};
    height: ${(props) => (props.visible && props.isCurrentSlide0 ? "575px" : "521.66px")};
  }
`;

export const SlideWithAttrs = styled(Slide).attrs((props: SlideProps) => ({
  isCurrentSlide0: props.isCurrentSlide0,
}))``;
