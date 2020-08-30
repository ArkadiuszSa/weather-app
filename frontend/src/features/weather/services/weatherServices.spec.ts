import { of } from 'rxjs';

import { HttpService } from 'common/services/httpService';

import { placeDataMock } from '../mocks/placeMocks';
import { WeatherService } from '../services/weatherServices';
import { weatherMock, weatherDataMock } from '../mocks/weatherMocks';

describe('WeatherService', () => {
    const httpServiceMock = HttpService as jest.Mock<HttpService>;
    let httpService: HttpService;

    beforeEach(() => {
        httpService = new httpServiceMock();
    });

    describe('getPlace service', () => {
        it('should fetch places', done => {
            jest.spyOn(httpService, 'GET').mockImplementation(() => of([placeDataMock]));

            const weatherService = new WeatherService(httpService);
            weatherService.getPlaces('London').subscribe(([res]) => {
                expect(res).toHaveProperty('id');
                expect(res).toHaveProperty('weatherId', 33);
                expect(res).toHaveProperty('name', 'London');

                done();
            });
        });
    });

    describe('getWeather service', () => {
        it('should fetch weather', done => {
            jest.spyOn(httpService, 'GET').mockImplementation(() => of(weatherDataMock));

            const weatherService = new WeatherService(httpService);
            weatherService.getWeather(123).subscribe(res => {
                expect(res).toMatchObject(weatherMock);
                done();
            });
        });
    });

    describe('transformToPlace service', () => {
        it('should transform list of PlaceData to list of Place', done => {
            jest.spyOn(httpService, 'GET').mockImplementation(() => of([placeDataMock]));

            const weatherService = new WeatherService(httpService);
            weatherService.getPlaces('London').subscribe(([res]) => {
                expect(res).toHaveProperty('id');
                expect(res).toHaveProperty('weatherId', 33);
                expect(res).toHaveProperty('name', 'London');
                done();
            });
        });
    });

    describe('transformToWeather service', () => {
        it('should transform  WeatherData to Weather', done => {
            jest.spyOn(httpService, 'GET').mockImplementation(() => of(weatherDataMock));

            const weatherService = new WeatherService(httpService);
            weatherService.getWeather(123).subscribe(res => {
                expect(res).toMatchObject(weatherMock);
                done();
            });
        });
    });
});
