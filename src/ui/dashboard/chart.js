import styled from "styled-components"
import { Colors } from "../../config/theme";

const DashboardChartContainer = styled.div`
    
    position: absolute;
    top: 10%;
    left: 2.5%;
    width: 60%;
    height: 50%;
    border: 1px solid grey;
    border-radius: 16px 0 0 0;
`;

const DashboardChart = () => {
    return (
        <DashboardChartContainer></DashboardChartContainer>
    );
}

export {
    DashboardChart
}