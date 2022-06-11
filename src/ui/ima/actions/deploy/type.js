import styled from "styled-components";

const DeploymentTypeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 8px 0 16px 0;
`;
const DeploymentTypeButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    border: 0.5px solid grey;
    width: 33%;
    background: ${props => props.isSelected ? 'white' : 'none'};
`;

const Key = styled.h3`
    font-size: 1.15rem;
    color:  ${props => props.isSelected ? 'black' : 'white'};
`;
const Value = styled.h6`
    font-size: 0.65rem;
    color:  ${props => props.isSelected ? 'black' : 'grey'};
`;

const DeploymentType = ({ deploymentType, setDeploymentType }) => {

    return (
        <DeploymentTypeContainer>
            {[{key: 'automated', value: 'I want to deploy the default contract'}, {key: 'custom', value: 'I have precompiled code to deploy'}, {key: 'deployed', value: 'The contract is already deployed'}].map((opts, index) => {
                const isSelected = deploymentType === opts.key;
                return (
                    <DeploymentTypeButton isSelected={isSelected} onClick={(e) => {
                        e.preventDefault();
                        setDeploymentType(opts.key);
                    }}>
                        <Key isSelected={isSelected}>{opts.key.substring(0, 1).toUpperCase() + opts.key.substring(1)}</Key>
                        <Value isSelected={isSelected}>{opts.value}</Value>
                    </DeploymentTypeButton>
                )
            })}
        </DeploymentTypeContainer>
    );
}

export {
    DeploymentType
}