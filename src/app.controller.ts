import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AwsService } from './config/aws/aws.service';

@Controller('user')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly awsService: AwsService,
  ) {}

  @Get('')
  getHello(): any {
    return this.awsService.getParameter('connectionString', false);
  }
}
