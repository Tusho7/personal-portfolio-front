import styled from "styled-components";

export const HeaderMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000011;
  padding: 20px;
  z-index: 2;
  @media (min-width: 768px) {
    padding: 30px;
  }
  @media (min-width: 1440px){
    padding: 50px;
  }
`;
