import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { WeatherResponseDto } from './weather-response.dto';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}
  private readonly key = this.configService.get<string>('API_KEY');
  url(city: string): string {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.key}`;
  }
  async getWeather(city: string): Promise<WeatherResponseDto> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(this.url(city)),
      );
      const weatherResponseDto = plainToClass(
        WeatherResponseDto,
        response.data,
      );
      try {
        await validateOrReject(weatherResponseDto);
      } catch (errors) {
        console.log('Validation failed: ', errors);
        throw errors;
      }

      return weatherResponseDto;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('City not found');
      }
      throw new Error('An error occurred while fetching weather data');
    }
  }
}
