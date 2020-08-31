import { transformToTimeSeriesChartData } from './transformToTimeSeriesChartData';
import { daytimeWeatherMock, avgTempChartSerieMock } from 'features/weather/mocks/weatherMocks';
import { DaytimeWeatherChartKey } from 'features/weather/models/weatherModel';

describe('transformToTimeSeriesChartData helper', () => {
    it('should transform daytimeWeather to chart series', () => {
        const result = transformToTimeSeriesChartData(
            [daytimeWeatherMock],
            DaytimeWeatherChartKey.AvgTemp,
        );

        expect(result).toMatchObject(avgTempChartSerieMock);
    });
});
