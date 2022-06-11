import { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../config";

const RoleProceedContainer = styled.div`
    position: absolute;
    bottom: 5%;
    left: 2.5%;
    right: 2.5%;
    background: none;
    border: 1px solid ${Colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    border-radius: 16px;
    color: white;
    &:hover {
        background: white;
        color: black;
    }
`;
const RoleProceed = ({ isS2S, canProceed, nextStep }) => {
    
    const [proceed, setProceed] = useState(false);

    useEffect(() => {
        if (isS2S) {
            setProceed(!Object.values(canProceed).includes(false));
        } else {
            setProceed(canProceed.minter);
        }
    }, [canProceed])

    if (proceed) {
        return (
            <RoleProceedContainer onClick={nextStep}>
                Proceed
            </RoleProceedContainer>
        );
    }
    
}

export {
    RoleProceed
}