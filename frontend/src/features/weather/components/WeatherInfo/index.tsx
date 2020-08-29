import React from 'react';

import * as S from './styles';

import { Weather } from '../../models/weatherModel';

interface Props {
    weather: Weather;
}

export const WeatherInfoComponent: React.FC<Props> = ({ weather }) => (
    <S.Wrapper>
        <h1>{weather.name}</h1>
        <span>{weather.applicableDate.toDateString()}</span>
    </S.Wrapper>
);
