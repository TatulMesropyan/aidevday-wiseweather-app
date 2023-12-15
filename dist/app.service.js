"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const weather_response_dto_1 = require("./weather-response.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.key = this.configService.get('API_KEY');
    }
    url(city) {
        return `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.key}`;
    }
    async getWeather(city) {
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(this.url(city)));
            const weatherResponseDto = (0, class_transformer_1.plainToClass)(weather_response_dto_1.WeatherResponseDto, response.data);
            try {
                await (0, class_validator_1.validateOrReject)(weatherResponseDto);
            }
            catch (errors) {
                console.log('Validation failed: ', errors);
                throw errors;
            }
            return weatherResponseDto;
        }
        catch (error) {
            if (error.response && error.response.status === 404) {
                throw new Error('City not found');
            }
            throw new Error('An error occurred while fetching weather data');
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map