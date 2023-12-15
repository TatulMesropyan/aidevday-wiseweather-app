import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { WeatherResponseDto } from './weather-response.dto';
export declare class AppService {
    private httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    private readonly key;
    url(city: string): string;
    getWeather(city: string): Promise<WeatherResponseDto>;
}
