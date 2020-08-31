import { of } from 'rxjs';
import fetch from 'jest-fetch-mock';

import { HttpService } from 'common/services/httpService';
import { HttpMethod } from 'common/models/httpModels';
import { placeDataMock } from 'features/weather/mocks/placeMocks';
import { PlaceData } from 'features/weather/models/placeModel';

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
        it('should call fetch with certain parameters and successful receive data', done => {
            fetch.mockResponseOnce(JSON.stringify(placeDataMock));

            httpService
                .makeRequest<PlaceData>(mockedUrl, HttpMethod.GET)

                .subscribe(result => {
                    expect(result).toMatchObject(placeDataMock);
                    expect(fetch).toBeCalledWith(`${mockedBaseUrl}${mockedUrl}`, mockedParams);
                    done();
                });
        });

        it('should call fetch with certain parameters and throw error', done => {
            const mockedErrorResponse = { status: 500 };
            fetch.mockResponseOnce(JSON.stringify(mockedErrorResponse));

            httpService
                .makeRequest<PlaceData>(mockedUrl, HttpMethod.GET)

                .subscribe(result => {
                    expect(result).toMatchObject(mockedErrorResponse);
                    expect(fetch).toBeCalledWith(`${mockedBaseUrl}${mockedUrl}`, mockedParams);
                    done();
                });
        });
    });
});
