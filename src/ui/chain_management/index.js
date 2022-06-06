import styled from "styled-components";
import { Title } from '../widgets';
import { Sections } from "./sections";
const ChainManagementPageContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const ChainManagementPage = () => {
    return (
        <ChainManagementPageContainer>
            <Title title="Chain Manager" />
            <Sections />
        </ChainManagementPageContainer>
    );
}

export {
    ChainManagementPage
}