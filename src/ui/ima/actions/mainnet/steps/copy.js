import styled from "styled-components";
import { Colors } from "../../../../../config";

const CopyContainer = styled.div`
    width: 100%;
    height: 10%;
    color: white;
    text-align: center;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 4px;
        word-break: break-all;
        max-width: 80%;
    }
`;

const Copy = ({ show, value }) => {

    if (show) {
        return <CopyContainer>
            <p>Copied <p style={{color: Colors.primary}}>{value}</p> to clipboard</p>
        </CopyContainer>
    }

    return null;
}

export {
    Copy
}