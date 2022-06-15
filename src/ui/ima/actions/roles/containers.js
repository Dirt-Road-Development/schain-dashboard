import styled from "styled-components";

export const MinterBurnerContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid ${props => props.textColor};
    min-height: 55px;
    border-radius: 16px;
    padding: 16px 0;
    margin: 8px 0;
    position: relative;
    display: flex;
    align-items: center;
`;