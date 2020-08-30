import { createSelector } from 'reselect';

import { AppState } from 'common/models/appStateModel';

export const getWeatherStateSelector = (state: AppState) => state.weatherState;
export const getWeatherSelector = (state: AppState) => getWeatherStateSelector(state).weather;
export const getPlacesSelector = (state: AppState) => getWeatherStateSelector(state).places;
export const getIsFetchingSelector = (state: AppState) => getWeatherStateSelector(state).isFetching;
