import styled, { css } from "styled-components"

interface CircleProp {
    active: boolean;
  }


export const Circles = styled.div<CircleProp>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #444444;

    ${props =>
    props.active &&
    css`
      width: 14px;
      height: 14px;
    `}
`