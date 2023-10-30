import { Injectable } from '@nestjs/common';
import { CatsService } from 'src/database/services/cat.service';

@Injectable()
export class CatService {
    constructor(private catService : CatsService){

    }

    GetAll(){
        return this.catService.findAll();
    }
}
