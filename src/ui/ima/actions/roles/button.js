/**
 * @license
 * 
 * SChain Dashboard
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * /**
 * @file src/ui/ima/actions/roles/button.js
 * @copyright TheGreatAxios and Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
 */


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
    color: ${props => {
        console.log(props);
        return props.color;
    }};
    font-size: 2rem;
`;

const MinterBurnerButton = ({ type, assignRole }) => {

    const [assignStatus, setAssignStatus] = useState(null);
    const [color, setColor] = useState(null);
    const [icon, setIcon] = useState(null);
    const [text, setText] = useState(null);
    useEffect(() => {
        const _color = () => {
            if (assignStatus === 'assigning') {
                return 'yellow';
            } else if (assignStatus === 'assigned') {
                return 'green';
            } else {
                return 'red';
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
                    console.log(err);
                    setAssignStatus(null);
                })
        }
        
    }

    return (
        <MinterBurnerContainer textColor={color} onClick={handleAssign}>
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