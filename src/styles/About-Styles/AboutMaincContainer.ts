import styled from "styled-components"

export const AboutMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        gap: 60px;
    }
`