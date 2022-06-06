import styled from "styled-components";
import { Colors } from "../../config";

const MultiSigStatisticsContainer = styled.div`

    position: absolute;
    top: 7.5%;
    left: 2.5%;
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const StatisticContainer = styled.div`
    width: 30%;
    height: 45%;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Label = styled.p`
    font-size: 1rem;
    text-align: center;
    color: grey;
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
`;

const Data = styled.h3`
    font-size: 2rem;
    color: ${props => {
        if (typeof props.enabled !== 'boolean') {
            return Colors.primary;
        } else if (props.enabled) {
            return 'green;';
        } else {
            return 'red;'
        }
    }};
`;
const Statistic = () => {
    return (
        <StatisticContainer>
            <Label>Label</Label>
            <Data>Data</Data>
        </StatisticContainer>
    )
}


const MultiSigStatistics = () => {
    return (
        <MultiSigStatisticsContainer>
            <Statistic />
            <Statistic />
            <Statistic />
            <Statistic />
            <Statistic />
            <Statistic />
        </MultiSigStatisticsContainer>
    );
}

export {
    MultiSigStatistics
}