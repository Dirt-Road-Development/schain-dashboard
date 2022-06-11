import styled from "styled-components"
import { MinterBurnerContainer } from "./containers"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { LoadingIcon } from "../../../widgets";
import { useEffect, useState } from "react";

const Label = styled.h3`
    position: absolute;
    left: 5%;
    color: white;
`;

const Icon = styled.div`
    position: absolute;
    right: 5%;
    color: ${props => props.color};
    font-size: 2rem;
`;

const MinterBurnerButton = ({ type, assignRole }) => {

    const [assignStatus, setAssignStatus] = useState(null);
    const [color, setColor] = useState(null);
    const [icon, setIcon] = useState(null);
    const [text, setText] = useState(null);
    useEffect(() => {
        console.log("UPDATING");
        const _color = () => {
            if (!assignStatus) {
                return 'red';
            } else if (assignStatus === 'assigning') {
                return 'yellow';
            } else if (assignStatus === 'assigned') {
                return 'green';
            }
        }
        
        const _text = () => {
            if (!assignStatus) {
                return `Click to Assign ${type} Role`;
            } else if (assignStatus === 'assigning') {
                return `Assigning ${type} Role`;
            } else if (assignStatus === 'assigned') {
                return `Assigned ${type} Role`;
            }
        }
    
        const _icon = () => {
            if (!assignStatus) {
                return <FontAwesomeIcon icon={faCircleXmark} />
            } else if (assignStatus === 'assigning') {
                return <LoadingIcon />
            } else if (assignStatus === 'assigned') {
                return <FontAwesomeIcon icon={faCircleCheck} />
            }
        }
        setColor(_color)
        setText(_text)
        setIcon(_icon);

    }, [assignStatus])

    const handleAssign = e => {
        e.preventDefault();
        // setAssignStatus(null);
        if (!assignStatus) {
            setAssignStatus('assigning');
            assignRole(type)
                .then((res) => {
                    if (res.hasRole) {
                        setAssignStatus('assigned');
                    } else {
                        setAssignStatus(null);
                    }
                })
                .catch((err) => {
                    setAssignStatus(null);
                    console.log(err);
                })
        }
        
    }

    return (
        <MinterBurnerContainer color={color} onClick={handleAssign}>
            <Label>{text}</Label>
            <Icon color={color}>
                {icon}
            </Icon>
        </MinterBurnerContainer>
    )
}

export {
    MinterBurnerButton
}