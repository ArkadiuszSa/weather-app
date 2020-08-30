export interface DaytimeWeatherBase {
    id: number;
    humidity: number;
}

export interface DaytimeWeatherData extends DaytimeWeatherBase {
    applicable_date: string;
    weather_state_name: string;
    the_temp: number;
    min_temp: number;
    max_temp: number;
    wind_speed: number;
}

export interface DaytimeWeather extends DaytimeWeatherBase {
    applicableDate: Date;
    stateName: string;
    avgTemp: number;
    minTemp: number;
    maxTemp: number;
    windSpeed: number;
}

export interface WeatherData {
    consolidated_weather: DaytimeWeatherData[];
    title: string;
}

export interface Weather {
    daytimeWeathers: DaytimeWeather[];
    placeName: string;
}

export enum DaytimeWeatherChartKey {
    AvgTemp = 'avgTemp',
    MaxTemp = 'maxTemp',
    MinTemp = 'minTemp',
    Humidity = 'humidity',
    WindSpeed = 'windSpeed',
}
