import { map } from 'rxjs/operators';

import { apiEndpoints } from 'config/apiConfig';
import { HttpService } from 'common/services/httpService';

import { WeatherData, Weather } from '../models/weatherModel';
import { PlaceData, Place } from '../models/placeModel';

export class WeatherService {
    constructor(private readonly httpService: HttpService) {}

    getPlace(phrase: string) {
        return this.httpService
            .GET<PlaceData>(`${apiEndpoints.place}/query=${phrase}`)
            .pipe(map(this.transformToPlace));
    }

    getWeather(weatherId: string) {
        return this.httpService
            .GET<WeatherData>(`${apiEndpoints.weather}/${weatherId}`)
            .pipe(map(this.transformToWeather));
    }

    private transformToWeather(weatherData: WeatherData): Weather {
        return {
            name: weatherData.weather_state_name,
            avgTemp: weatherData.the_temp,
            minTemp: weatherData.min_temp,
            maxTemp: weatherData.max_temp,
            windSpeed: weatherData.wind_speed,
            humidity: weatherData.humidity,
        };
    }

    private transformToPlace(placeData: PlaceData): Place {
        return {
            title: placeData.title,
            weatherId: placeData.woeid,
        };
    }
}
