import { combineEpics } from 'redux-observable';
import { filter, catchError, map, pluck, exhaustMap, debounceTime } from 'rxjs/operators';
import { of } from 'rxjs';
import { isActionOf } from 'typesafe-actions';

import { Epic } from 'common/models/epicModel';
import { HttpError } from 'common/models/httpErrorModels';

import { WeatherService } from '../services/weatherServices';
import * as actions from '../actions/weatherActions';

export const weatherEpicFactory = (weatherService: WeatherService): Epic => {
    const getWeather: Epic = action$ =>
        action$.pipe(
            filter(isActionOf(actions.getWeatherAsync.request)),
            debounceTime(300),
            pluck('payload'),
            exhaustMap(phrase =>
                weatherService.getWeather(phrase).pipe(
                    map(actions.getWeatherAsync.success),
                    catchError((err: HttpError) => of(actions.getWeatherAsync.failure(err))),
                ),
            ),
        );

    return combineEpics(getWeather);
};

console.log('test');
