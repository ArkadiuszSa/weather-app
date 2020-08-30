import { StateObservable, ActionsObservable } from 'redux-observable';
import { Subject, of, throwError } from 'rxjs';

import { AppState } from 'common/models/appStateModel';
import { mockedError } from 'common/mocks/mockedError';

import { placeMock } from '../mocks/placeMocks';
import { weatherMock } from '../mocks/weatherMocks';
import { defaultWeatherState } from '../reducers/weatherReducer';
import * as actions from '../actions/weatherActions';
import { weatherEpicFactory } from './weatherEpics';
import { WeatherService } from '../services/weatherServices';

describe('Weather epics', () => {
    const weatherServiceMock = WeatherService as jest.Mock<WeatherService>;
    const mockState = new StateObservable<AppState>(new Subject(), {
        weatherState: defaultWeatherState,
    });
    let weatherService: WeatherService;

    beforeEach(() => {
        weatherService = new weatherServiceMock();
    });

    describe('searchPlaceEpic', () => {
        it('should fetch places', done => {
            jest.spyOn(weatherService, 'getPlaces').mockImplementation(() => of([placeMock]));

            const weatherEpicFactoryInstance = weatherEpicFactory(weatherService);
            const action$ = of(actions.searchPlacesByPhraseAsync.request('London'));

            weatherEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(
                res => {
                    expect(res).toMatchObject(
                        actions.searchPlacesByPhraseAsync.success([placeMock]),
                    );

                    done();
                },
            );
        });

        it('should handle error on fetching places', done => {
            jest.spyOn(weatherService, 'getPlaces').mockImplementation(() =>
                throwError(mockedError),
            );

            const weatherEpicFactoryInstance = weatherEpicFactory(weatherService);
            const action$ = of(actions.searchPlacesByPhraseAsync.request('London'));

            weatherEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(
                res => {
                    expect(res).toEqual(actions.searchPlacesByPhraseAsync.failure(mockedError));

                    done();
                },
            );
        });
    });
    describe('getWeather epic', () => {
        it('should fetch weather', done => {
            jest.spyOn(weatherService, 'getWeather').mockImplementation(() => of(weatherMock));

            const weatherEpicFactoryInstance = weatherEpicFactory(weatherService);
            const action$ = of(actions.getWeatherAsync.request(123));

            weatherEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(
                res => {
                    expect(res).toMatchObject(actions.getWeatherAsync.success(weatherMock));

                    done();
                },
            );
        });

        it('should handle error on fetching weather', done => {
            jest.spyOn(weatherService, 'getWeather').mockImplementation(() =>
                throwError(mockedError),
            );

            const weatherEpicFactoryInstance = weatherEpicFactory(weatherService);
            const action$ = of(actions.getWeatherAsync.request(123));

            weatherEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(
                res => {
                    expect(res).toEqual(actions.getWeatherAsync.failure(mockedError));

                    done();
                },
            );
        });
    });
});
