import { ethers } from "ethers";
import { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../config";
import { MultisigWallet } from "../../logic/contracts/multisig_wallet";

const OwnersContainer = styled.div`

    position: absolute;
    bottom: 2.5%;
    left: 2.5%;
    width: 55%;
    border: 2px solid white;
    height: 40%;

`;
const OwnersListContainer = styled.div`
    position: absolute;
    height: 90%;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;
`;
const AddOwnerContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    border-top: 1px solid grey;
    align-items: center;
`;

const Owners = ({ ethereum, account, owners }) => {

    return (
        <OwnersContainer>
            <OwnersList ethereum={ethereum} account={account} owners={owners} />
            <AddOwner ethereum={ethereum} owners={owners} />
        </OwnersContainer>
    );
}

const AddOwner = ({ ethereum, owners }) => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const [futureOwner, setFutureOwner] = useState("");
    const [isValid, setIsValid] = useState(false);

    const addOwner = async() => {
        const msg = new MultisigWallet();
        await msg.addOwnerToMultisig(provider, futureOwner);
        setFutureOwner("");
        setIsValid(false);
    }

    return (
        <AddOwnerContainer>
            <IsValid isValid={isValid}/>
            <TextField placeholder="0x123..." value={futureOwner} onChange={(e) => {
                e.preventDefault();
                const _isValid = ethers.utils.isAddress(e.target.value);
                setFutureOwner(e.target.value);
                if (!_isValid) {
                    setIsValid(false);
                } else {
                    provider.getCode(e.target.value)
                        .then((res) => {
                            if (res === '0x') {
                                setIsValid(true);
                            } else {
                                setIsValid(false);
                            }
                        })
                        .catch((err) => {
                            throw new Error(err);
                        })   
                }
            }}/>
            <AddOwnerButton onClick={(e) => {
                e.preventDefault();
                if (!isValid) {
                    alert('Not a valid address');
                } else {
                    addOwner();
                }
                
            }}>{isValid ? 'Add Owner' : 'Cannot Add Owner'} </AddOwnerButton>
        </AddOwnerContainer>
    )
}

const IsValidContainer = styled.div`
    width: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${props => props.isValid ? 'green': 'red'};
`;
const IsValid = ({ isValid }) => {
    return (
        <IsValidContainer isValid={isValid}>
            {isValid ? 'Valid': 'Invalid'}
        </IsValidContainer>
    )
}

const TextField = styled.input`
    width: 60%;
    background: none;
    border: none;
    &:focus {
        outline: none;
        box-shadow: 0;
    }
    color: white;
    font-size: 0.85rem;
`;
const AddOwnerButton = styled.button`
    width: 25%;
    background: none;
    color: ${Colors.primary};
    border: none;
`;



const OwnersList = ({ ethereum, owners, account }) => {
    return (
        <OwnersListContainer>
            {owners && owners.map((owner, index) => {
                return <Owner key={index} account={account} index={index} owner={owner} ethereum={ethereum} />
            })}
        </OwnersListContainer>
    );
}

const OwnerContainer = styled.div`
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    border-bottom: 0.5px solid grey;
`;
const OwnerContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
const OwnerIndex = styled.p`
    width: 15%;
    text-align: center;
    color: grey;
`;
const OwnerAddress = styled.p`
    width: 65%;
    text-align: left;
    color: white;
    font-size: 0.85rem;
`;
const OwnerButton = styled.button`
    width: 20%;
    background: none;
    border: none;
    color: ${props => props.isMe ? Colors.primary: 'red'};
    margin-right: 5%;
    text-align: right;

`;

const Owner = ({ owner, ethereum, index, account }) => {
    const isMe = owner === ethers.utils.getAddress(account);

    /// Todo Set Up Provider
    /// Todo State to Watch Remove Owner

    return (
        <OwnerContainer>
            <OwnerContent>
                <OwnerIndex>{index}</OwnerIndex>
                <OwnerAddress>{owner}</OwnerAddress>
                <OwnerButton onClick={(e) => {
                    e.preventDefault();
                    /// TODO Implement -> Submit Transaction To Remove Owner 
                    /// Only Submit if Not You
                }} isMe={isMe}>{isMe ? 'This is You' : 'Remove Owner'}</OwnerButton>
            </OwnerContent>
        </OwnerContainer>
    );
}

export {
    Owners
}