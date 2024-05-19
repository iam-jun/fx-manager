import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SimpleGuard } from './auth/simple/simple.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(SimpleGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
