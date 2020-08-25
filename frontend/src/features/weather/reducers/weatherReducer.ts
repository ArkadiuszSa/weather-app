import { createReducer } from 'typesafe-actions';

import { AppAction } from 'common/models/actionModel';

import * as actions from '../actions/weatherActions';

export interface WeatherState {
    isFetching: boolean;
}

export const defaultWeatherState: WeatherState = {
    isFetching: false,
};

export const weatherReducer = createReducer<WeatherState, AppAction>(
    defaultWeatherState,
).handleAction([actions.getWeatherAsync.request], state => ({
    ...state,
    isFetching: true,
}));
