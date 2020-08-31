import { of } from 'rxjs';
import fetch from 'jest-fetch-mock';

import { HttpService } from 'common/services/httpService';
import { placeDataMock } from 'features/weather/mocks/placeMocks';
import { PlaceData } from 'features/weather/models/placeModel';
import { HttpMethod } from 'common/models/httpModels';

const mockedUrl = 'testUrl';
const mockedBaseUrl = 'apiBase/';
const mockedParams = {
    method: HttpMethod.GET,
    headers: {
        'content-type': 'application/json',
    },
};

describe('httpService', () => {
    const httpServiceMock = HttpService as jest.Mock<HttpService>;
    let httpService: HttpService;

    beforeEach(() => {
        httpService = new httpServiceMock(mockedBaseUrl);
        fetch.resetMocks();
    });
    describe('GET method', () => {
        it('should transform daytimeWeather to chart series', done => {
            fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }));

            const httpServiceSpy = jest
                .spyOn(httpService, 'makeRequest')
                .mockImplementation(() => of(placeDataMock));

            httpService
                .GET<PlaceData>(mockedUrl)

                .subscribe(result => {
                    expect(result).toMatchObject(placeDataMock);
                    expect(httpServiceSpy).toBeCalledWith(mockedUrl, HttpMethod.GET);
                    done();
                });
        });
    });

    describe('makeRequest method', () => {
        it('call fetch with certain parameters', done => {
            fetch.mockResponseOnce(JSON.stringify(placeDataMock));

            httpService
                .makeRequest<PlaceData>(mockedUrl, HttpMethod.GET)

                .subscribe(result => {
                    expect(result).toMatchObject(placeDataMock);
                    expect(fetch).toHaveBeenCalledTimes(1);
                    expect(fetch).toBeCalledWith(`${mockedBaseUrl}${mockedUrl}`, mockedParams);
                    done();
                });
        });
    });
});
