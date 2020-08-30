import React from 'react';
import { useSelector } from 'react-redux';

import { fontSize } from 'config/variablesConfig';

import { WeatherLineChart } from '../../components/WeatherLineChart';
import {
    getWeatherForSelectedDate,
    getWeatherPlaceNameSelector,
} from '../../selectors/weatherSelectors';
import { WeatherParam } from '../WeatherParam';
import { WeatherBottomButtons } from '../WeatherBottomButtons';
import * as S from './styles';

export const WeatherInfoComponent: React.FC = () => {
    const daytimeWeather = useSelector(getWeatherForSelectedDate);
    const placeName = useSelector(getWeatherPlaceNameSelector);

    return (
        <S.Wrapper>
            <S.ContentWrapper>
                {daytimeWeather && (
                    <>
                        <S.PlaceHeader>{placeName}</S.PlaceHeader>

                        <S.WeatherDate>
                            {daytimeWeather.applicableDate.toDateString()}
                        </S.WeatherDate>
                        <S.GeneralWeatherInfoWrapper>
                            <WeatherParam
                                label="AVERAGE"
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
                <WeatherBottomButtons />
            </S.ContentWrapper>
        </S.Wrapper>
    );
};
