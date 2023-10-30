import { Module } from '@nestjs/common';
import { CatService } from './cat/cat.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    providers: [
        CatService, 
    ],
    imports : [
        DatabaseModule
    ],
    exports:[
        CatService
    ]
})
export class ServicesModule {}
