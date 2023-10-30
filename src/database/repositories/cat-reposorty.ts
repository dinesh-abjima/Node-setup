import { Injectable, Inject } from '@nestjs/common';
import { CatDto } from '../domains/cat.entity';

@Injectable()
export class CatsRepository {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof CatDto
  ) {}

  async findAll(): Promise<CatDto[]> {
    return this.catsRepository.findAll<CatDto>();
  }
}