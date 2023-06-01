import styled from "styled-components";

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 70px;
  overflow-x: hidden;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    margin-top: 200px;
  }
  @media (min-width: 1440px){
    margin-top: 95px;
  }
`;
