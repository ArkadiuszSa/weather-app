import { Serie } from '@nivo/line';

import { DaytimeWeather, DaytimeWeatherChartKey } from '../models/weatherModel';

export const transformToTimeSeriesChartData = (
    data: DaytimeWeather[] = [],
    key: DaytimeWeatherChartKey,
): Serie[] => [
    {
        id: key,
        data: data.map(data => ({
            x: data.applicableDate.toDateString(),
            y: Math.round(data[key]),
        })),
    },
];
