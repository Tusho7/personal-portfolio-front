import styled from "styled-components"

export const SkillsAndExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 30px;
    @media (min-width: 768px) {
        align-items: center;
        width: 80%;
        margin: auto;
        gap: 20px;
        p{
            text-align: center;
            line-height: 1.5;
            font-size: 17px;
        }
    }
`