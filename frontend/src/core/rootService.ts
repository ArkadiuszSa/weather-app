import { BASE_URL } from 'config/apiConfig';
import { HttpService } from 'common/services/httpService';
import { WeatherService } from 'features/weather/services/weatherServices';

export const httpService = new HttpService(BASE_URL);
export const weatherService = new WeatherService(httpService);
