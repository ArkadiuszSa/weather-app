import { createSelector } from 'reselect';

import { AppState } from 'common/models/appStateModel';

import { checkIfDatesAreOnSameDay } from '../helpers/checkIfDatesAreOnSameDay';

export const getWeatherStateSelector = (state: AppState) => state.weatherState;
export const getWeatherSelector = (state: AppState) => getWeatherStateSelector(state).weather;
export const getWeatherPlaceNameSelector = (state: AppState) =>
    getWeatherSelector(state)?.placeName;
export const getPlacesSelector = (state: AppState) => getWeatherStateSelector(state).places;
export const getIsFetchingSelector = (state: AppState) => getWeatherStateSelector(state).isFetching;
export const getSelectedDateSelector = (state: AppState) =>
    getWeatherStateSelector(state).selectedDate;
export const getDaytimeWeathersSelector = (state: AppState) =>
    getWeatherSelector(state)?.daytimeWeathers;

export const getWeatherForSelectedDate = createSelector(
    getSelectedDateSelector,
    getDaytimeWeathersSelector,
    (selectedDate, daytimeWeathers) =>
        daytimeWeathers?.find(({ applicableDate }) =>
            checkIfDatesAreOnSameDay(selectedDate, applicableDate),
        ),
);
