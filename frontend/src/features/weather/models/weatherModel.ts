export interface WeatherResponse {
    consolidated_weather: WeatherData[];
}

export interface WeatherData {
    applicable_date: string;
    weather_state_name: string;
    the_temp: number;
    min_temp: number;
    max_temp: number;
    wind_speed: number;
    humidity: number;
    title: string;
}

export interface Weather {
    applicableDate: Date;
    name: string;
    avgTemp: number;
    minTemp: number;
    maxTemp: number;
    windSpeed: number;
    humidity: number;
    placeName: string;
}
