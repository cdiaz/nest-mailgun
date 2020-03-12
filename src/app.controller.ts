import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/sendmail')
  sendMail(@Query('to') email: String) {
    return this.appService.sendMail(email);
  }
}
