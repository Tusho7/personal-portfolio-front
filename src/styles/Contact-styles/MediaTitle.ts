import styled from "styled-components"

export const MediaTitle = styled.p`
    display: none;
    @media (min-width: 1440px){
        display: block;
        font-size: 30px;
        color: #f0f8ff;
        cursor: pointer;
        &:hover{
            color: #F3A850;
        }
    }
`