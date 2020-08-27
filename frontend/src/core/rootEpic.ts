import { combineEpics } from 'redux-observable';

import { weatherEpicFactory } from 'features/weather/epics/weatherEpics';

import { weatherService } from './rootService';

export const rootEpic = combineEpics(weatherEpicFactory(weatherService));
