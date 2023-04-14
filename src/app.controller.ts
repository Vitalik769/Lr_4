import { Controller, Get, HttpStatus, HttpException } from '@nestjs/common';
import { async } from 'rxjs';
import { AppService } from './app.service';


@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  // @Get('/LocalError')
  // async rrr() {
  //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  // }
}
