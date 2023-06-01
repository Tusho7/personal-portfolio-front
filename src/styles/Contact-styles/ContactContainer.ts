import styled from "styled-components"

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 100px;
    color: #f0f8ff;
    position: relative;
    overflow: hidden;

    a{
        text-decoration: none;
        color:  #f4a949;
    }

    h1{
        font-size: 22px;
        padding-top: 10px;
        @media (min-width: 768px){
            width: 50%;
            margin: auto;
        }
    }
    @media (min-width: 768px) {
        p{
            font-size: 20px;
        }
    }
`