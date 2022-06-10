import styled from 'styled-components';
import { Colors } from '../../config';

const IMAButtonContainer = styled.div`
    width: 75%;
    height: 5%;
    background: transparent;
    border: 1px solid ${Colors.primary};
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    &:hover {
        background: white;
        color: ${Colors.primary};
    }
    border-radius: 16px;
`;
const IMAButton = ({ label }) => {

    const visibleLabel = () => {
        if (label === 'auto_deploy_erc20') return 'ERC-20';
        if (label === 'auto_deploy_erc721') return 'ERC-721';
        if (label === 'auto_deploy_erc1155') return 'ERC-1155';
    }


    return (
        <IMAButtonContainer onClick={(e) => {
            e.preventDefault();
        }}>
            {visibleLabel()}
        </IMAButtonContainer>
    )
}

export {
    IMAButton
}