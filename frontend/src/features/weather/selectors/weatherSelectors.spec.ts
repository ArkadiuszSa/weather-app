import {
    getIsPreviousDaytimeWeatherSelector,
    getIsNextDaytimeWeatherSelector,
    getWeatherForSelectedDate,
} from 'features/weather/selectors/weatherSelectors';
import { daytimeWeatherMock } from 'features/weather/mocks/weatherMocks';

const secondDaytimeWeatherMock = { ...daytimeWeatherMock, id: 2 };
const thirdDaytimeWeatherMock = { ...daytimeWeatherMock, id: 3 };

const daytimeWeatherListMock = [
    daytimeWeatherMock,
    secondDaytimeWeatherMock,
    thirdDaytimeWeatherMock,
];

describe('weather selectors', () => {
    describe('getWeatherForSelectedDate', () => {
        it('should return second daytime weather', () => {
            const result = getWeatherForSelectedDate.resultFunc(1, daytimeWeatherListMock);

            expect(result).toMatchObject(secondDaytimeWeatherMock);
        });

        it('should return third daytime weather', () => {
            const result = getWeatherForSelectedDate.resultFunc(0, daytimeWeatherListMock);

            expect(result).toMatchObject(daytimeWeatherMock);
        });
    });
    describe('getIsPreviousDaytimeWeatherSelector', () => {
        it('should return true when there is previous weather daytime ', () => {
            const result = getIsPreviousDaytimeWeatherSelector.resultFunc(
                2,
                daytimeWeatherListMock,
            );

            expect(result).toBe(true);
        });

        it('should return true when there is no previous weather daytime ', () => {
            const result = getIsPreviousDaytimeWeatherSelector.resultFunc(
                0,
                daytimeWeatherListMock,
            );

            expect(result).toBe(false);
        });
    });

    describe('getIsNextDaytimeWeatherSelector', () => {
        it('should return true when there is next weather daytime ', () => {
            const result = getIsNextDaytimeWeatherSelector.resultFunc(0, daytimeWeatherListMock);

            expect(result).toBe(true);
        });

        it('should return true when there is next weather daytime ', () => {
            const result = getIsNextDaytimeWeatherSelector.resultFunc(2, daytimeWeatherListMock);

            expect(result).toBe(false);
        });
    });
});
