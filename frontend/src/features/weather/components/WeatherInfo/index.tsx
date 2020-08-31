import React from 'react';
import { useSelector } from 'react-redux';
import MoonLoader from 'react-spinners/MoonLoader';

import { fontSize } from 'config/variablesConfig';
import { FullCenter } from 'common/styled/Center';
import sunIcon from 'assets/icons/sun.svg';

import { WeatherLineChart } from '../../components/WeatherLineChart';
import {
    getWeatherForSelectedDate,
    getWeatherPlaceNameSelector,
    getIsFetchingWeatherSelector,
} from '../../selectors/weatherSelectors';
import { DaytimeWeatherChartKey } from '../../models/weatherModel';
import { WeatherParam } from '../WeatherParam';
import { WeatherBottomButtons } from '../WeatherBottomButtons';
import * as S from './styles';

export const WeatherInfoComponent: React.FC = () => {
    const daytimeWeather = useSelector(getWeatherForSelectedDate);
    const placeName = useSelector(getWeatherPlaceNameSelector);
    const isFetchingWeather = useSelector(getIsFetchingWeatherSelector);

    return (
        <S.Wrapper>
            <S.ContentWrapper>
                {isFetchingWeather ? (
                    <S.LoaderWrapper>
                        <MoonLoader size={50} />
                    </S.LoaderWrapper>
                ) : daytimeWeather ? (
                    <>
                        <S.PlaceHeader>{placeName}</S.PlaceHeader>
                        <S.WeatherDate>
                            {daytimeWeather.applicableDate.toDateString()}
                        </S.WeatherDate>
                        <S.GeneralWeatherInfoWrapper>
                            <WeatherParam
                                label="AVERAGE"
                                valueFontSize={fontSize.large}
                                value={`${Math.round(daytimeWeather.avgTemp)}°`}
                                chartSourceKey={DaytimeWeatherChartKey.AvgTemp}
                            />
                            <S.WeatherStateNameWrapper>
                                {daytimeWeather.stateName}
                            </S.WeatherStateNameWrapper>
                        </S.GeneralWeatherInfoWrapper>
                        <S.WeatherParamsWrapper>
                            <WeatherParam
                                label="MAX"
                                value={`${Math.round(daytimeWeather.maxTemp)}°`}
                                chartSourceKey={DaytimeWeatherChartKey.MaxTemp}
                            />
                            <WeatherParam
                                label="MIN"
                                value={`${Math.round(daytimeWeather.minTemp)}°`}
                                chartSourceKey={DaytimeWeatherChartKey.MinTemp}
                            />
                            <WeatherParam
                                label="HUMIDITY"
                                value={Math.round(daytimeWeather.humidity)}
                                chartSourceKey={DaytimeWeatherChartKey.Humidity}
                                subscript="%"
                            />
                            <WeatherParam
                                label="WIND SPEED"
                                value={Math.round(daytimeWeather.windSpeed)}
                                chartSourceKey={DaytimeWeatherChartKey.WindSpeed}
                                subscript="km/h"
                            />
                        </S.WeatherParamsWrapper>
                        <WeatherLineChart />
                    </>
                ) : (
                    <FullCenter>
                        <S.NoSelectionIcon width={5} src={sunIcon} />
                        <span>You must first search for the location you are interested in</span>
                    </FullCenter>
                )}
                <WeatherBottomButtons />
            </S.ContentWrapper>
        </S.Wrapper>
    );
};
