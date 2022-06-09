import styled from "styled-components";
import { AssetList } from "./asset_list";

const AssetsContainer = styled.div`

    position: absolute;
    top: 7.5%;
    left: 2.5%;
    height: 92.5%;
    width: 65%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;
const Assets = () => {
    return (
        <AssetsContainer>
            <AssetList />
            <AssetList />
            <AssetList />
        </AssetsContainer>
    );
}

export {
    Assets
}