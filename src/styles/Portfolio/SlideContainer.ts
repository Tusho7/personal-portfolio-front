import styled from "styled-components"

export const SlideContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (min-width: 768px) {
        flex-direction: row-reverse;
        align-items: center;
        margin: auto;
    }
`