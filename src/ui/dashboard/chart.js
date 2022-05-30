import styled from "styled-components"

const DashboardChartContainer = styled.div`
    
    position: absolute;
    top: 10%;
    left: 2.5%;
    width: 60%;
    height: 50%;
    border: 2px solid purple;
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