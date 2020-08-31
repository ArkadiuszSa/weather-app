import { Serie } from '@nivo/line';

import {
    DaytimeWeather,
    Weather,
    DaytimeWeatherData,
    WeatherData,
    DaytimeWeatherChartKey,
} from 'features/weather/models/weatherModel';

export const daytimeWeatherMock: DaytimeWeather = {
    id: 1,
    stateName: 'Heave Cloud',
    applicableDate: new Date('2020-08-29'),
    avgTemp: 22.222,
    minTemp: 20.333,
    maxTemp: 24.33,
    windSpeed: 5.797,
    humidity: 59,
};

export const daytimeWeatherDataMock: DaytimeWeatherData = {
    id: 1,
    weather_state_name: 'Heave Cloud',
    applicable_date: '2020-08-29',
    the_temp: 22.222,
    min_temp: 20.333,
    max_temp: 24.33,
    wind_speed: 5.797,
    humidity: 59,
};

export const weatherMock: Weather = {
    daytimeWeathers: [daytimeWeatherMock],
    placeName: 'London',
};

export const weatherDataMock: WeatherData = {
    consolidated_weather: [daytimeWeatherDataMock],
    title: 'London',
};

export const avgTempChartSerieMock: Serie[] = [
    {
        id: DaytimeWeatherChartKey.AvgTemp,
        data: [
            {
                x: daytimeWeatherMock.applicableDate.toDateString(),
                y: Math.round(daytimeWeatherMock.avgTemp),
            },
        ],
    },
];
