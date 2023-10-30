import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AwsService } from './config/aws/aws.service';
import { CatService } from './services/cat/cat.service';

@Controller('user')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly awsService: AwsService,
    private readonly catService: CatService
  ) {}

  @Get('')
  getHello(): any {
    return this.catService.GetAll();
  }
}
