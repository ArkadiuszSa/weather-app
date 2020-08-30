import React from 'react';
import { useSelector } from 'react-redux';
import { ResponsiveLine } from '@nivo/line';

import { weatherChartConfig } from '../../configs/weatherChartConfig';
import { getWeatherChartData } from '../../selectors/weatherSelectors';
import * as S from './styles';

export const WeatherLineChart = () => {
    const data = useSelector(getWeatherChartData);

    return (
        <S.Wrapper>
            <ResponsiveLine data={data} {...weatherChartConfig} />
        </S.Wrapper>
    );
};
