import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../../../config';
import { setIMAPage } from '../../../state/ima.slice';
import { visibleLabel } from '../utils';

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

    const dispatch = useDispatch();

    return (
        <IMAButtonContainer onClick={(e) => {
            e.preventDefault();
            dispatch(setIMAPage(label));
        }}>
            {visibleLabel(label)}
        </IMAButtonContainer>
    )
}

export {
    IMAButton
}