import { map, mergeMap } from 'rxjs/operators';

import { apiEndpoints } from 'config/apiConfig';
import { HttpService } from 'common/services/httpService';

import { WeatherData, Weather } from '../models/weatherModel';
import { PlaceData, Place } from '../models/placeModel';

export class WeatherService {
    constructor(private readonly httpService: HttpService) {}

    getWeather(phrase: string) {
        return this.getPlace(phrase).pipe(mergeMap(place => this.getWeatherData(place.weatherId)));
    }

    private getPlace(phrase: string) {
        return this.httpService
            .GET<PlaceData[]>(`${apiEndpoints.place}/?query=${phrase}`)
            .pipe(map(this.transformToPlace));
    }

    private getWeatherData(weatherId: number) {
        return this.httpService
            .GET<WeatherData>(`${apiEndpoints.weather}/${weatherId}`)
            .pipe(map(this.transformToWeather));
    }

    private transformToWeather(weatherData: WeatherData): Weather {
        return {
            applicableDate: new Date(weatherData.applicable_date),
            name: weatherData.weather_state_name,
            avgTemp: weatherData.the_temp,
            minTemp: weatherData.min_temp,
            maxTemp: weatherData.max_temp,
            windSpeed: weatherData.wind_speed,
            humidity: weatherData.humidity,
            placeName: weatherData.title,
        };
    }

    private transformToPlace([placeData]: PlaceData[]): Place {
        return {
            weatherId: placeData.woeid,
        };
    }
}
