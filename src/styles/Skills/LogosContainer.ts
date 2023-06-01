import styled from "styled-components"

export const LogosContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 30px;
    column-gap: 45px;
    align-items: center;
    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin-top: 4rem;
        justify-content: center;
        row-gap: 40px;
    }
`