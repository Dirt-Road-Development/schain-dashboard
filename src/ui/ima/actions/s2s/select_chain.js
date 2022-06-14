import { useConnectedMetaMask } from "metamask-react";
import styled from "styled-components";
import { Colors } from "../../../../config";
import chains from "../../../../config/chains";

const SelectChainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
const ChainContainer = styled.div`

    width: 45%;
    height: 50%;
    background: none;
    border: 1px solid grey;
    border-radius: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
        border: 1px solid ${Colors.primary};
        background: white;
        h3 {
            color: ${Colors.primary};
        }
        p {
            color: black;
        }
    }
    h3 {
        color: white;
        position: absolute;
        left: 5%;
        right: 5%;
        top: 5%;
        text-align: center;
        font-size: 1.5rem;
    }
    .title {
        font-size: 1.15rem;
        color: white;
    }
    .description {
        font-size: 0.85rem;
        color: grey;
    }
    
`;
const SelectChain = ({ state, setState, setCurrentStep }) => {

    const { chainId } = useConnectedMetaMask();
    const chain = chains.find((chain) => chain.id === parseInt(chainId));

    const handleSelection = (isTargetChain) => {
        let _state = state;
        _state['isTargetChain'] = isTargetChain;
        _state[isTargetChain ? 'targetName' : 'originName'] = chain.name.toLowerCase();
        _state[isTargetChain ? 'targetId' : 'originId'] = chain.id;
        if (isTargetChain) {
            _state['originName'] = null;
            _state['originId'] = null;
        } else {
            _state['targetName'] = null;
            _state['targetId'] = null;
        }
        setState(_state);
        setCurrentStep();
    }

    return (
        <SelectChainContainer>
            <ChainContainer onClick={(e) => {
                e.preventDefault();
                handleSelection(false);
            }}>
                <h3>Origin</h3>
                <p className='title'>I am the Owner of the Origin Chain</p>
                <p className='description'>The origin chain is where the token is already deployed</p>
            </ChainContainer>
            <ChainContainer onClick={(e) => {
                e.preventDefault();
                handleSelection(true);
            }}>
                <h3>Target</h3>
                <p className='title'>I am the Owner of the Target Chain</p>
                <p className='description'>The target chain is where the clone will be deployed</p>
            </ChainContainer>
        </SelectChainContainer>
    );
}

export {
    SelectChain
}