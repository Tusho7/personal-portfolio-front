import styled from "styled-components";
import BigSphero from "../../assets/sphere_lg.png";

export const SpheroContainer = styled.div`
  &:first-child {
    background-image: url(${BigSphero});
    background-size: 120px 120px;
    background-repeat: no-repeat;
    background-position: top center;
  }
`;
