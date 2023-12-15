export declare class WeatherResponseDto {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
declare class Coord {
    lon: number;
    lat: number;
}
declare class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
declare class Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}
declare class Wind {
    speed: number;
    deg: number;
}
declare class Clouds {
    all: number;
}
declare class Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}
export {};
