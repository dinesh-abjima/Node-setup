import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { CatsService } from './services/cat.service';
import { databaseProviders } from './database.provider';
import { catsProviders } from './providers/cat-provider';


@Module({
  providers: [
    ...databaseProviders,
    ...catsProviders,
    DatabaseService,
    CatsService
  ],
  exports:[
    ...databaseProviders,
    ...catsProviders,
    DatabaseService,
    CatsService
  ]
})
export class DatabaseModule {}
