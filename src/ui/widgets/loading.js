import styled from "styled-components";
import { Colors } from "../../config";

const LoadingIconCss = styled.div`
    position: relative;
    margin: 0 auto;
    width: 80px;
    height: 80px;
`;

const LoadingIcon = ({ primary }) => {

    if (primary) {
        return (
            <LoadingIconCss className="lds-default">
                <div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className='primary'></div><div className="primary"></div><div className='primary'></div>
            </LoadingIconCss>
        );    
    }

    return (
        <LoadingIconCss className="lds-default">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </LoadingIconCss>
    );
}

export {
    LoadingIcon
}