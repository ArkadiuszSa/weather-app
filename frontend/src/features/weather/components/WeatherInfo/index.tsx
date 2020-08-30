import React from 'react';
import { useSelector } from 'react-redux';

import { fontSize } from 'config/variablesConfig';

import { DaytimeWeather } from '../../models/weatherModel';
import { WeatherLineChart } from '../../components/WeatherLineChart';
import {
    getWeatherForSelectedDate,
    getWeatherPlaceNameSelector,
} from '../../selectors/weatherSelectors';
import { WeatherParam } from '../WeatherParam';
import * as S from './styles';

interface Props {
    weather: DaytimeWeather;
}

export const WeatherInfoComponent: React.FC<Props> = () => {
    const daytimeWeather = useSelector(getWeatherForSelectedDate);
    const placeName = useSelector(getWeatherPlaceNameSelector);

    return (
        <S.Wrapper>
            {daytimeWeather && (
                <>
                    <S.PlaceHeader>{placeName}</S.PlaceHeader>

                    <S.WeatherDate>{daytimeWeather.applicableDate.toDateString()}</S.WeatherDate>
                    <S.GeneralWeatherInfoWrapper>
                        <WeatherParam
                            label="MAX"
                            valueFontSize={fontSize.large}
                            value={`${Math.round(daytimeWeather.maxTemp)}°`}
                        />
                        <S.WeatherStateNameWrapper>
                            {daytimeWeather.stateName}
                        </S.WeatherStateNameWrapper>
                    </S.GeneralWeatherInfoWrapper>

                    <S.WeatherParamsWrapper>
                        <WeatherParam
                            label="MAX"
                            value={`${Math.round(daytimeWeather.maxTemp)}°`}
                        />
                        <WeatherParam
                            label="MIN"
                            value={`${Math.round(daytimeWeather.minTemp)}°`}
                        />
                        <WeatherParam
                            label="HUMIDITY"
                            value={Math.round(daytimeWeather.humidity)}
                            subscript="%"
                        />
                        <WeatherParam
                            label="WIND SPEED"
                            value={Math.round(daytimeWeather.humidity)}
                            subscript="km/h"
                        />
                    </S.WeatherParamsWrapper>
                    <WeatherLineChart />
                </>
            )}
        </S.Wrapper>
    );
};
