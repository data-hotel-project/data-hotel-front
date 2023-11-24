import styled from "styled-components";

export const StyledContainer = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    width: 90%;
    border-top: 1px solid var(--secondary-normal);
    background-color: transparent;
    margin-top: 30px;
    align-items: center;

    @media (min-width: 600px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const StyledBox = styled.div`
    height: 70vh;
    width: 100%;
    background-color: transparent;
    border-left: 1px solid var(--secondary-normal);
    border-right: 1px solid var(--secondary-normal);
`;