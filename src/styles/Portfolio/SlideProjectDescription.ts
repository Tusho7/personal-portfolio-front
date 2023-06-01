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
`;
