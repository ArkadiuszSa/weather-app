import { createReducer } from 'typesafe-actions';

import { AppAction } from 'common/models/actionModel';
import { HttpError } from 'common/models/httpErrorModels';

import * as actions from '../actions/weatherActions';
import { Weather, DaytimeWeatherChartKey } from '../models/weatherModel';
import { Place } from '../models/placeModel';

export interface WeatherState {
    isFetchingPlaces: boolean;
    isFetchingWeather: boolean;
    weather?: Weather;
    places: Place[];
    selectedWeatherDayIndex: number;
    chartDataSourceKey: DaytimeWeatherChartKey;
    networkError?: HttpError;
}

export const defaultWeatherState: WeatherState = {
    isFetchingPlaces: false,
    isFetchingWeather: false,
    places: [],
    selectedWeatherDayIndex: 0,
    chartDataSourceKey: DaytimeWeatherChartKey.AvgTemp,
};

export const weatherReducer = createReducer<WeatherState, AppAction>(defaultWeatherState)
    .handleAction(actions.searchPlacesByPhraseAsync.request, state => ({
        ...state,
        isFetchingPlaces: true,
    }))
    .handleAction(actions.searchPlacesByPhraseAsync.success, (state, action) => ({
        ...state,
        isFetchingPlaces: false,
        places: action.payload,
    }))
    .handleAction(actions.searchPlacesByPhraseAsync.failure, (state, action) => ({
        ...state,
        isFetchingPlaces: false,
        networkError: action.payload,
    }))
    .handleAction(actions.getWeatherAsync.request, state => ({
        ...state,
        isFetchingWeather: true,
    }))
    .handleAction(actions.getWeatherAsync.success, (state, action) => ({
        ...state,
        isFetchingWeather: false,
        weather: action.payload,
    }))

    .handleAction(actions.getWeatherAsync.failure, (state, action) => ({
        ...state,
        isFetchingWeather: false,
        networkError: action.payload,
    }))

    .handleAction(actions.setSelectedDateIndexAction, (state, action) => ({
        ...state,
        selectedWeatherDayIndex: action.payload,
    }))
    .handleAction(actions.setChartSourceKeyAction, (state, action) => ({
        ...state,
        chartDataSourceKey: action.payload,
    }));
