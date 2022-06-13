import { useState } from "react";
import styled from "styled-components";
import { MinterBurnerButton } from "./button";
const AssignContainer = styled.div`
    margin: 16px 0;
    padding: 16px 0;
    height: 100%;
    width: 100%;
`;

const Assign = ({ isS2S, state, assignRole }) => {

    return (
        <AssignContainer>
            <MinterBurnerButton type="Minter" assignRole={assignRole} />
            {isS2S && <MinterBurnerButton type="Burner" assignRole={assignRole} />}
        </AssignContainer>
    );
}


export {
    Assign
}