export interface DaytimeWeatherData {
    applicable_date: string;
    weather_state_name: string;
    the_temp: number;
    min_temp: number;
    max_temp: number;
    wind_speed: number;
    humidity: number;
}

export interface DaytimeWeather {
    applicableDate: Date;
    stateName: string;
    avgTemp: number;
    minTemp: number;
    maxTemp: number;
    windSpeed: number;
    humidity: number;
}

export interface WeatherData {
    consolidated_weather: DaytimeWeatherData[];
    title: string;
}

export interface Weather {
    daytimeWeathers: DaytimeWeather[];
    placeName: string;
}
