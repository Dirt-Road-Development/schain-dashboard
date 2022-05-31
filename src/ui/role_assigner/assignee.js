import { ethers } from "ethers";
import styled from "styled-components";
import { Colors } from "../../config";

const AssigneeContainer = styled.div`
    position: absolute;
    top: 35%;
    height: 100%;
    width: 85%;
    left: 2.5%;
`;

const TextFieldContainer = styled.div`
    width: 100%;
    height: 5%;
    border: 1px solid grey;
    position: absolute;
    top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 16px;
`;


const _Title = styled.h2`
    color: grey;
`;

const ValidEthereumAddressContainer = styled.div`

    width: 10%;
    height: 100%;
    border-radius: 16px 0 0 16px;
    display: flex;
    flex-direction: row;
    flex-direction: center;
    align-items: center;
    p {
        padding: 0 0 0 16px;
        text-align: center;
        color: ${props => props.isAddress ? 'green' : 'red'};
    }
`;

const ValidEthereumAddress = ({ assignee }) => {
    let isAddress = false;
    if (ethers.utils.isAddress(assignee)) {
        isAddress = true;
    }

    if (assignee) {
        
    }

    return (
        <ValidEthereumAddressContainer isAddress={isAddress}>
            {assignee && <p>{isAddress ? 'Valid' : 'Invalid'} Address </p>}
        </ValidEthereumAddressContainer>
    );
}

const TextFieldInput = styled.input`
    width: 70%;
    height: 100%;
    background: transparent;
    border: none;
    color: white;
    font-size: 1rem;
`;

const TextField = ({ assignee, setAssignee }) => {

    return <TextFieldInput value={assignee} placeholder="0x...." onChange={(e) => {
        e.preventDefault();
        setAssignee(e.target.value);
    }}/>
}

const PredeployedContainer = styled.div`
    width: 20%;
    height: 100%;
    color: ${Colors.primary};
    border-radius: 0 16px 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Predeployed = ({ setAssignee }) => {
    return (
        <PredeployedContainer onClick={(e) => {
            e.preventDefault();
            setAssignee('0xD244519000000000000000000000000000000000');
        }}>Click for Pre-Deployed MSG</PredeployedContainer>
    )
}

const Assignee = ({ assignee, setAssignee }) => {
    return (
        <AssigneeContainer>
            <_Title>Assignee</_Title>
            <TextFieldContainer>
                <ValidEthereumAddress assignee={assignee} />
                <TextField assignee={assignee} setAssignee={setAssignee} />
                <Predeployed setAssignee={setAssignee} />
            </TextFieldContainer>
        </AssigneeContainer>
    );
}

export {
    Assignee
}