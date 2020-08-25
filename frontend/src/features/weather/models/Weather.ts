export interface WeatherData {
    weather_state_name: string;
    the_temp: number;
    min_temp: number;
    max_temp: number;
    wind_speed: number;
    humidity: number;
}

export interface Weather {
    name: string;
    avgTemp: number;
    minTemp: number;
    maxTemp: number;
    windSpeed: number;
    humidity: number;
}
