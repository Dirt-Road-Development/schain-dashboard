import styled from "styled-components";

const AssetListContainer = styled.div`
    width: 33%;
    margin: 0 16px 0 0;
    border: 1px solid grey;
    height: 100%;
    position: relative;
`;

const AssetsContainer = styled.div`
    position: absolute;
    top: 7.5%;
    left: 5%;
    right: 5%;
    height: 90%;
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
      }
`;

const AssetTitle = styled.h3`

    position: absolute;
    top: 2.5%;
    left: 5%;
    font-size: 1.15rem;
    color: grey;
`;

const AssetList = () => {
    return (
        <AssetListContainer>
            <AssetTitle>Title</AssetTitle>
            <AssetsContainer>

            </AssetsContainer>
        </AssetListContainer>
    )
}

export {
    AssetList
}