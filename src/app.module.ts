import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AwsModule } from './config/aws/aws.module';

@Module({
  imports: [DatabaseModule, AwsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
