import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../state/navigation.slice";
import { Header } from "./header";
import { Colors } from '../../config/theme';
import { Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBridge, faCrow, faCrown, faGasPump, faGauge, faInfo, faPeopleGroup, faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./footer";


const NavigationContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 2px solid ${Colors.primary};
`;

const NavigationButton = styled.div`
    width: 85%;
    height: calc(100% / 35);
    text-decoration: none;
    color: ${props => props.color};
    background-color: ${props => props.background};
    border: 0.5px solid ${Colors.primary};
    padding: 16px;
    margin: 8px 8px;
    display: flex;
    align-items: center;
    border-radius: 16px;
`;

const Navigation = () => {

    const page = useSelector((state) => state.navigation.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pages = {
        'Dashboard': '/',
        'Chain Manager': '/chain',
        'IMA Manager': '/ima',
        'Multisig': '/multisig',
        'Role Assigner': '/assigner',
        'S-Fuel': '/sfuel',
        'Support': '/support'
    };

    const icons = [
        faGauge,
        faUserNinja,
        faBridge,
        faPeopleGroup,
        faCrown,
        faGasPump,
        faInfo
    ];

    return (
        <NavigationContainer>
            <Header />
            {Object.entries(pages).map((_page, index) => {
                const title = _page[0];
                const path = _page[1];
                let color = page === title ? Colors.primary : 'white';
                let background = page === title ? 'white' : 'transparent';

                return (
                    <NavigationButton background={background} color={color} key={index} to={path} onClick={(e) => {
                        e.preventDefault();
                        navigate(path);
                        dispatch(setPage(title));
                    }}>
                        <FontAwesomeIcon icon={icons[index]} size="2x" width="25px"/>
                        <span style={{width: '25px'}} />
                        {title}
                    </NavigationButton>
                );
            })}
            <Footer />
        </NavigationContainer>
    ); 
}

export {
    Navigation
}