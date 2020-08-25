import { combineReducers } from 'redux';

import { weatherReducer } from 'features/weather/reducers/weatherReducer';

export const rootReducer = combineReducers({
    weather: weatherReducer,
});
