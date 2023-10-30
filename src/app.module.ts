import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsModule } from './config/aws/aws.module';
import { LoggerMiddleware } from './utils/logger.middleware';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    AwsModule, ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
