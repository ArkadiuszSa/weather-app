import { Weather } from 'features/weather/models/weatherModel';

export const weatherMock: Weather = {
    name: 'Heave Cloud',
    applicableDate: new Date('2020-08-29'),
    avgTemp: 22.222,
    minTemp: 20.333,
    maxTemp: 24.33,
    windSpeed: 5.797,
    humidity: 59,
    placeName: 'London',
};
