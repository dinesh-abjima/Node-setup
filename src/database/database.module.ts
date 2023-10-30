import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { CatsRepository } from './repositories/cat-reposorty';
import { databaseProviders } from './database.provider';
import { catsProviders } from './providers/cat-provider';


@Module({
  providers: [
    ...databaseProviders,
    ...catsProviders,
    DatabaseService,
    CatsRepository
  ],
  exports:[
    ...databaseProviders,
    ...catsProviders,
    DatabaseService,
    CatsRepository
  ]
})
export class DatabaseModule {}
