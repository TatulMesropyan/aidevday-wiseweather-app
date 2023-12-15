export class WeatherResponseDto {
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
  
  class Coord {
    lon: number;
    lat: number;
  }
  
  class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  class Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  
  class Wind {
    speed: number;
    deg: number;
  }
  
  class Clouds {
    all: number;
  }
  
  class Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }