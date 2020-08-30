import { combineEpics } from 'redux-observable';
import { filter, catchError, map, pluck, switchMap, debounceTime } from 'rxjs/operators';
import { of } from 'rxjs';
import { isActionOf } from 'typesafe-actions';

import { Epic } from 'common/models/epicModel';
import { HttpError } from 'common/models/httpErrorModels';

import { WeatherService } from '../services/weatherServices';
import * as actions from '../actions/weatherActions';

export const weatherEpicFactory = (weatherService: WeatherService): Epic => {
    const searchPlaceEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.searchPlacesByPhraseAsync.request)),
            debounceTime(300),
            pluck('payload'),
            switchMap(phrase =>
                weatherService.getPlaces(phrase).pipe(
                    map(actions.searchPlacesByPhraseAsync.success),
                    catchError((err: HttpError) =>
                        of(actions.searchPlacesByPhraseAsync.failure(err)),
                    ),
                ),
            ),
        );

    const getWeatherEpic: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getWeatherAsync.request)),
            pluck('payload'),
            switchMap(phrase =>
                weatherService.getWeather(phrase).pipe(
                    map(actions.getWeatherAsync.success),
                    catchError((err: HttpError) => of(actions.getWeatherAsync.failure(err))),
                ),
            ),
        );

    return combineEpics(searchPlaceEpic, getWeatherEpic);
};
