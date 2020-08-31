import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from '@nivo/line';
import AutoSizer from 'react-virtualized-auto-sizer';

import { weatherChartConfig } from '../../configs/weatherChartConfig';
import { getWeatherChartData } from '../../selectors/weatherSelectors';
import * as S from './styles';

export const WeatherLineChart = () => {
    const data = useSelector(getWeatherChartData);

    return (
        <S.Wrapper>
            {/*
                Most of the charts libraries have problem with resizing
                in flex container. AutoSizer provide fixed values to chart
                which fix problem.
             */}
            <AutoSizer>
                {({ height, width }) => (
                    <Line data={data} height={height} width={width} {...weatherChartConfig} />
                )}
            </AutoSizer>
        </S.Wrapper>
    );
};
