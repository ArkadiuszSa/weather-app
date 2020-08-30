import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DaytimeWeatherChartKey } from '../../models/weatherModel';
import { setChartSourceKeyAction } from '../../actions/weatherActions';
import * as S from './styles';
import { getChartDataSourceKey } from 'features/weather/selectors/weatherSelectors';
import { color } from 'config/variablesConfig';

interface Props {
    label: string;
    value: string | number;
    chartSourceKey: DaytimeWeatherChartKey;
    valueFontSize?: string;
    subscript?: string;
}

export const WeatherParam: React.FC<Props> = ({
    label,
    value,
    valueFontSize,
    subscript,
    chartSourceKey,
}) => {
    const dispatch = useDispatch();
    const selectedChartKey = useSelector(getChartDataSourceKey);

    const isSelected = selectedChartKey === chartSourceKey;

    return (
        <S.Wrapper onClick={() => dispatch(setChartSourceKeyAction(chartSourceKey))}>
            <S.Label>{label}</S.Label>
            <S.ValueWrapper
                fontSize={valueFontSize}
                color={isSelected ? color.primary : color.primaryFont}
            >
                {value} <S.ValueSubscript>{subscript}</S.ValueSubscript>
            </S.ValueWrapper>
        </S.Wrapper>
    );
};
