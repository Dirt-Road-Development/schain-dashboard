import styled from "styled-components";


const IMAChainsContainer = styled.div`

    height: 30%;
    width: 100%;
    position: relative;
    border-bottom: 1px solid grey;
`;

const SectionTitle = styled.h3`
    position: absolute;
    top: 5%;
    left: 2.5%;
    font-size: 1.15rem;
    color: grey;
`;

const IMAChainsListContainer = styled.div`
    position: absolute;
    top: 15%;
    left: 2.5%:
    right: 2.5%;
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`

const IMAChains = () => {
    
    return (
        <IMAChainsContainer>
            <SectionTitle>Chains List</SectionTitle>
            {/* <IMAChainsListContainer>
                {imaInstances && imaInstances.length > 0 && imaInstances.map((instance, index) => {
                    return <IMAChain key={index} instance={instance[1]} chainId={instance[0]} />
                })}
            </IMAChainsListContainer> */}
        </IMAChainsContainer>
    )
}

export {
    IMAChains
}