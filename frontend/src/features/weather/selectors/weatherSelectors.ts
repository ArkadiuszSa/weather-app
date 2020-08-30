import { createSelector } from 'reselect';

import { AppState } from 'common/models/appStateModel';

import { transformToTimeSeriesChartData } from '../helpers/transformDataToChartData';
import { DaytimeWeatherChartKey } from '../models/weatherModel';

export const getWeatherStateSelector = (state: AppState) => state.weatherState;
export const getWeatherSelector = (state: AppState) => getWeatherStateSelector(state).weather;
export const getWeatherPlaceNameSelector = (state: AppState) =>
    getWeatherSelector(state)?.placeName;
export const getPlacesSelector = (state: AppState) => getWeatherStateSelector(state).places;
export const getIsFetchingSelector = (state: AppState) => getWeatherStateSelector(state).isFetching;
export const getSelectedDateIndexSelector = (state: AppState) =>
    getWeatherStateSelector(state).selectedWeatherDayIndex;
export const getDaytimeWeathersSelector = (state: AppState) =>
    getWeatherSelector(state)?.daytimeWeathers;

export const getWeatherForSelectedDate = createSelector(
    getSelectedDateIndexSelector,
    getDaytimeWeathersSelector,
    (selectedDaytimeWeatherIndex, daytimeWeathers) =>
        daytimeWeathers?.[selectedDaytimeWeatherIndex],
);

export const getWeatherChartData = createSelector(getDaytimeWeathersSelector, daytimeWeathers =>
    transformToTimeSeriesChartData('avgTemp', daytimeWeathers, DaytimeWeatherChartKey.AvgTemp),
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
