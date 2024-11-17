import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNyx(): string {
    return this.appService.getNyx();
  }

  @Get('name')
  getName(): string {
    return "Javier";
  }

  @Get('max')
  getMax(): string {
    return "Max";
  }

  @Get('/id/:id')
  getId(@Param() params:any): string {
    return params.id
  }
}
