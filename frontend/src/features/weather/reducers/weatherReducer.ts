import { createReducer } from 'typesafe-actions';

import { AppAction } from 'common/models/actionModel';

import * as actions from '../actions/weatherActions';
import { Weather } from '../models/weatherModel';
import { Place } from '../models/placeModel';

export interface WeatherState {
    isFetching: boolean;
    weather?: Weather;
    places: Place[];
    selectedDate: Date;
}

export const defaultWeatherState: WeatherState = {
    isFetching: false,
    places: [],
    selectedDate: new Date(),
};

export const weatherReducer = createReducer<WeatherState, AppAction>(defaultWeatherState)
    .handleAction(
        [actions.searchPlacesByPhraseAsync.request, actions.getWeatherAsync.request],
        state => ({
            ...state,
            isFetching: true,
        }),
    )
    .handleAction(actions.getWeatherAsync.success, (state, action) => ({
        ...state,
        isFetching: false,
        weather: action.payload,
    }))
    .handleAction(actions.searchPlacesByPhraseAsync.success, (state, action) => ({
        ...state,
        isFetching: false,
        places: action.payload,
    }))
    .handleAction(
        [actions.searchPlacesByPhraseAsync.failure, actions.getWeatherAsync.failure],
        state => ({
            ...state,
            isFetching: false,
        }),
    )
    .handleAction(actions.setSelectedDateAction, (state, action) => ({
        ...state,
        selectedDate: action.payload,
    }));
