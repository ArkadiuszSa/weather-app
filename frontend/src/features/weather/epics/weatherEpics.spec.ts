import { StateObservable, ActionsObservable } from 'redux-observable';
import { Subject, of, throwError } from 'rxjs';

import { AppState } from 'common/models/appStateModel';
import { mockedError } from 'common/mocks/mockedError';

import { placeMock } from '../mocks/placeMocks';
import { defaultWeatherState } from '../reducers/weatherReducer';
import * as actions from '../actions/weatherActions';
import { weatherEpicFactory } from './weatherEpics';
import { WeatherService } from '../services/weatherServices';

describe('Weather epics', () => {
    const weatherServiceMock = WeatherService as jest.Mock<WeatherService>;
    const mockState = new StateObservable<AppState>(new Subject(), {
        weather: defaultWeatherState,
    });
    let weatherService: WeatherService;

    beforeEach(() => {
        weatherService = new weatherServiceMock();
    });

    describe('searchPlaceEpic', () => {
        it('should fetch places', done => {
            jest.spyOn(weatherService, 'getPlaces').mockImplementation(() => of([placeMock]));

            const meetingsEpicFactoryInstance = weatherEpicFactory(weatherService);
            const action$ = of(actions.searchPlacesByPhraseAsync.request('Berlin'));

            meetingsEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(
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

            const meetingsEpicFactoryInstance = weatherEpicFactory(weatherService);
            const action$ = of(actions.searchPlacesByPhraseAsync.request('Berlin'));

            meetingsEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(
                res => {
                    expect(res).toEqual(actions.searchPlacesByPhraseAsync.failure(mockedError));

                    done();
                },
            );
        });
    });
});
