import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Colors, getChainById } from "../../config";
import { setSelectedChain } from "../../state/ima.slice";

const IMAChainContainer = styled.div`
    width: 45%;
    border: 1px solid grey;
    border-radius: 16px;
    text-align: center;
    color: grey;
    padding: 2px 4px;
    &:hover {
        color: white;
        background-color: ${Colors.primary};
    }
`;

const IMAChain = ({ instance, chainId }) => {

    const [chain, setChain] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const _chain = getChainById(chainId);
        setChain(_chain);
    }, [])

    if (!chain) {
        return <span></span>
    }

    return (
        <IMAChainContainer onClick={(e) => {
            e.preventDefault();
            dispatch(setSelectedChain(chain));
        }}>
            {chain.name}
        </IMAChainContainer>
    );

}

export {
    IMAChain
}