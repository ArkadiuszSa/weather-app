import React from 'react';

import * as S from './styles';

import { Weather } from '../../models/weatherModel';
import { WeatherParam } from '../WeatherParam';
import { fontSize } from 'config/variablesConfig';

interface Props {
    weather: Weather;
}

export const WeatherInfoComponent: React.FC<Props> = ({ weather }) => (
    <S.Wrapper>
        <S.PlaceHeader>{weather.placeName}</S.PlaceHeader>
        <S.WeatherDate>{weather.applicableDate.toDateString()}</S.WeatherDate>
        <S.GeneralWeatherInfoWrapper>
            <WeatherParam
                label="MAX"
                valueFontSize={fontSize.large}
                value={`${Math.round(weather.maxTemp)}°`}
            />
            <S.WeatherStateNameWrapper>{weather.name}</S.WeatherStateNameWrapper>
        </S.GeneralWeatherInfoWrapper>

        <S.WeatherParamsWrapper>
            <WeatherParam label="MAX" value={`${Math.round(weather.maxTemp)}°`} />
            <WeatherParam label="MIN" value={`${Math.round(weather.minTemp)}°`} />
            <WeatherParam label="HUMIDITY" value={Math.round(weather.humidity)} subscript="%" />
            <WeatherParam
                label="WIND SPEED"
                value={Math.round(weather.humidity)}
                subscript="km/h"
            />
        </S.WeatherParamsWrapper>
    </S.Wrapper>
);
