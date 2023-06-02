import styled, { css } from "styled-components"
import { CircleProp } from "../../types/circle-type"

export const Circles = styled.div<CircleProp>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #444444;
    cursor: pointer;

    ${props =>
    props.active &&
    css`
      width: 14px;
      height: 14px;
    `}
    @media (min-width: 1440px){
      width: 14px;
      height: 14px;
      ${props =>
    props.active &&
    css`
      width: 20px;
      height: 20px;
    `}
    }
`