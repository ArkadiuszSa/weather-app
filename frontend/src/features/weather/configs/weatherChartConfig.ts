import { color } from 'config/variablesConfig';

const chartMargin = 20;

export const weatherChartConfig = {
    margin: { right: chartMargin, top: chartMargin, bottom: chartMargin, left: chartMargin },
    colors: color.primary,
    pointSize: 10,
    pointColor: color.chartPoint,
    pointBorderWidth: 2,
    pointBorderColor: color.chartPoint,
    useMesh: true,
    enableGridX: false,
    enableGridY: false,
    enableCrosshair: false,
    axisBottom: null,
    axisLeft: null,
};
