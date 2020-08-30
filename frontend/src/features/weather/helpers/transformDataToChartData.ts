import { Serie } from '@nivo/line';

import { DaytimeWeather, DaytimeWeatherChartKey } from '../models/weatherModel';

export const transformToTimeSeriesChartData = (
    id: string,
    data: DaytimeWeather[] = [],
    key: DaytimeWeatherChartKey,
): Serie[] => [
    {
        id,
        data: data.map(data => ({
            x: data.applicableDate.toDateString(),
            y: Math.round(data[key]),
        })),
    },
];
