import styled from "styled-components";
import { Colors } from "../../config";
import { LoadingIcon } from "../widgets";

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
const Statistic = ({ label, data }) => {
    return (
        <StatisticContainer>
            <Label>{label}</Label>
            {!data ? <LoadingIcon /> : <Data>{data}</Data>}
        </StatisticContainer>
    )
}


const MultiSigStatistics = ({ statistics }) => {
    return (
        <MultiSigStatisticsContainer>
            <Statistic label="# of Owners" data={statistics.owners.length} />
            <Statistic label="# of Requirements" data={statistics.required} />
            <Statistic label="Wallet Balance" data={`${statistics.balance} S-Fuel`}/>
            <Statistic label="# of Transactions" data={statistics.pending + statistics.executed} />
            <Statistic label="# of Pending Txs" data={statistics.pending} />
            <Statistic label="# of Executed Txs" data={statistics.executed} />
        </MultiSigStatisticsContainer>
    );
}

export {
    MultiSigStatistics
}