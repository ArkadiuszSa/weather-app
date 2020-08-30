import { map } from 'rxjs/operators';

import { apiEndpoints } from 'config/apiConfig';
import { HttpService } from 'common/services/httpService';

import { WeatherData, Weather } from '../models/weatherModel';
import { PlaceData, Place } from '../models/placeModel';
import { generateId } from 'features/weather/helpers/generateId';

export class WeatherService {
    constructor(private readonly httpService: HttpService) {}

    getPlaces(phrase: string) {
        return this.httpService
            .GET<PlaceData[]>(`${apiEndpoints.place}/?query=${phrase}`)
            .pipe(map(places => places.map(this.transformToPlace)));
    }

    getWeather(weatherId: number) {
        return this.httpService
            .GET<WeatherData>(`${apiEndpoints.weather}/${weatherId}`)
            .pipe(map(this.transformToWeather));
    }

    private transformToWeather(weatherData: WeatherData): Weather {
        return {
            placeName: weatherData.title,
            daytimeWeathers: weatherData.consolidated_weather.map(weatherData => ({
                id: weatherData.id,
                applicableDate: new Date(weatherData.applicable_date),
                stateName: weatherData.weather_state_name,
                avgTemp: weatherData.the_temp,
                minTemp: weatherData.min_temp,
                maxTemp: weatherData.max_temp,
                windSpeed: weatherData.wind_speed,
                humidity: weatherData.humidity,
            })),
        };
    }

    private transformToPlace(placeData: PlaceData, index: number): Place {
        return {
            id: generateId(index),
            name: placeData.title,
            weatherId: placeData.woeid,
        };
    }
}
