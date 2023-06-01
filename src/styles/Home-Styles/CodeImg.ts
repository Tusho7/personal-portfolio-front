import styled from "styled-components"

export const CodeImg = styled.img`
    position: absolute;
    top: 110px;
    left: -190px;
    width: 500px;
    height: 410px;
    filter: blur(5px);
    transform: scaleY(1.2);
    z-index: -1;
    @media (min-width: 768px){
        height: 550px;
        width: 600px;
    }
`