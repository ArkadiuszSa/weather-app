import { createAsyncAction } from 'typesafe-actions';

import { HttpError } from 'common/models/httpErrorModels';

import { Weather } from './../models/weatherModel';

export const getWeatherAsync = createAsyncAction(
    'GET_WEATHER_REQUESTED',
    'GET_WEATHER_SUCCEED',
    'GET_WEATHER_FAILED',
)<string, Weather, HttpError>();
