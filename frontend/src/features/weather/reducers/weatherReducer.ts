import { createReducer } from 'typesafe-actions';

import { AppAction } from 'common/models/actionModel';

import * as actions from '../actions/weatherActions';
import { Weather } from '../models/weatherModel';
import { Place } from '../models/placeModel';

export interface WeatherState {
    isFetchingPlaces: boolean;
    isFetchingWeather: boolean;

    weather?: Weather;
    places: Place[];
    selectedWeatherDayIndex: number;
}

export const defaultWeatherState: WeatherState = {
    isFetchingPlaces: false,
    isFetchingWeather: false,
    places: [],
    selectedWeatherDayIndex: 0,
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
    .handleAction(actions.searchPlacesByPhraseAsync.failure, state => ({
        ...state,
        isFetchingPlaces: false,
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

    .handleAction(actions.getWeatherAsync.failure, state => ({
        ...state,
        isFetchingWeather: false,
    }))

    .handleAction(actions.setSelectedDateIndexAction, (state, action) => ({
        ...state,
        selectedWeatherDayIndex: action.payload,
    }));
