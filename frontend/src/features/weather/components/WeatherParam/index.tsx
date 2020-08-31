import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { color } from 'config/variablesConfig';

import { DaytimeWeatherChartKey } from '../../models/weatherModel';
import { setChartSourceKeyAction } from '../../actions/weatherActions';
import { getChartDataSourceKey } from '../../selectors/weatherSelectors';
import * as S from './styles';

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
