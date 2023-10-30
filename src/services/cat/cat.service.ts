import { Injectable } from '@nestjs/common';
import { CatsRepository } from 'src/database/repositories/cat-reposorty';

@Injectable()
export class CatService {
    constructor(private catService : CatsRepository){

    }

    GetAll(){
        return this.catService.findAll();
    }
}
