import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('weather')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:city')
  async getWeather(@Body('city') city: string): Promise<any> {
    return this.appService.getWeather(city);
  }
}
