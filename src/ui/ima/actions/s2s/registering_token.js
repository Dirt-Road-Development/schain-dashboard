import styled from "styled-components";
import { LoadingIcon } from "../../../widgets";

const RegisteringTokenContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 1.15rem;
        color: white;
    }
`;
const RegisteringToken = () => {
    return (
        <RegisteringTokenContainer>
            <LoadingIcon />
            <p>Registering Token</p>
        </RegisteringTokenContainer>
    );
}

export {
    RegisteringToken
}