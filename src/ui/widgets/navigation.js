import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../state/navigation.slice";
import { Header } from "./header";
import { Colors } from '../../config/theme';
import { Navigate, useNavigate } from 'react-router-dom';


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
    height: calc(100% / 20);
    margin: 0 auto;
    text-decoration: none;
    color: ${props => props.color ?? 'white'};
    padding: 8px 0 0 0;
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

    return (
        <NavigationContainer>
            <Header />
            {Object.entries(pages).map((_page, index) => {
                const title = _page[0];
                const path = _page[1];
                let color = page === title ? Colors.primary : null;
                return (
                    <NavigationButton color={color} key={index} to={path} onClick={(e) => {
                        e.preventDefault();
                        navigate(path);
                        dispatch(setPage(title));
                    }}>
                        {title}
                    </NavigationButton>
                );
            })}
        </NavigationContainer>
    ); 
}

export {
    Navigation
}