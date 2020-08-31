import { createSelector } from 'reselect';

import { AppState } from 'common/models/appStateModel';

import { transformToTimeSeriesChartData } from '../helpers/transformDataToChartData';

export const getWeatherStateSelector = (state: AppState) => state.weatherState;
export const getWeatherSelector = (state: AppState) => getWeatherStateSelector(state).weather;
export const getWeatherPlaceNameSelector = (state: AppState) =>
    getWeatherSelector(state)?.placeName;
export const getPlacesSelector = (state: AppState) => getWeatherStateSelector(state).places;
export const getIsFetchingWeatherSelector = (state: AppState) =>
    getWeatherStateSelector(state).isFetchingWeather;
export const getIsFetchingPlacesSelector = (state: AppState) =>
    getWeatherStateSelector(state).isFetchingPlaces;
export const getSelectedDateIndexSelector = (state: AppState) =>
    getWeatherStateSelector(state).selectedWeatherDayIndex;
export const getChartDataSourceKey = (state: AppState) =>
    getWeatherStateSelector(state).chartDataSourceKey;
export const getDaytimeWeathersSelector = (state: AppState) =>
    getWeatherSelector(state)?.daytimeWeathers;
export const getNetworkErrorSelector = (state: AppState) =>
    getWeatherStateSelector(state).networkError;

export const getWeatherForSelectedDate = createSelector(
    getSelectedDateIndexSelector,
    getDaytimeWeathersSelector,
    (daytimeWeatherIndex, daytimeWeathers) => daytimeWeathers?.[daytimeWeatherIndex],
);

export const getWeatherChartData = createSelector(
    getDaytimeWeathersSelector,
    getChartDataSourceKey,
    (daytimeWeathers, chartDataSourceKey) =>
        transformToTimeSeriesChartData(daytimeWeathers, chartDataSourceKey),
);

export const getIsNextDaytimeWeatherSelector = createSelector(
    getSelectedDateIndexSelector,
    getDaytimeWeathersSelector,
    (daytimeWeatherIndex, daytimeWeathers) =>
        daytimeWeathers && daytimeWeatherIndex + 1 < daytimeWeathers.length,
);

export const getIsPreviousDaytimeWeatherSelector = createSelector(
    getSelectedDateIndexSelector,
    getDaytimeWeathersSelector,
    (daytimeWeatherIndex, daytimeWeathers) => daytimeWeathers && daytimeWeatherIndex > 0,
);
