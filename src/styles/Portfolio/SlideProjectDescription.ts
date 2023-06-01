import styled from "styled-components";

export const SlideProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 18px;
    h1 {
      font-size: 40px;
    }
  }
  @media (min-width: 1440px){
    h1{
      width: 75%;
      font-size: 55px;
    }
  }
`;
