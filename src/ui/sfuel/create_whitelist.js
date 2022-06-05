import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../config';

const CreateWhitelistContainer = styled.div``;
const CreateWhitelist = () => {
    return (
        <CreateWhitelistContainer>

        </CreateWhitelistContainer>
    );
}

const CreateWhitelistButtonContainer = styled.div`
    position: absolute;
    top: 2.5%;
    right: 2.5%;
    background-color: white;
    border: 1px solid ${Colors.primary};
    border-radius: 16px;
    padding: 8px 16px;
`;

const CreateWhitelistButton = ({ currentPage, setCurrentPage }) => {
    return (
        <CreateWhitelistButtonContainer onClick={(e) => {
            e.preventDefault();
            setCurrentPage(currentPage === 'main' ? 'create_whitelist' : 'main');
        }}>
            {currentPage === 'main' ? 'Create Whitelist' : `<-- Back`}
        </CreateWhitelistButtonContainer>
    );
}

export {
    CreateWhitelist,
    CreateWhitelistButton
}