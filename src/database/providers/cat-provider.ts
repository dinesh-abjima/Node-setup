import { CatDto } from '../domains/cat.entity';

export const catsProviders = [
  {
    provide: 'CATS_REPOSITORY',
    useValue: CatDto,
  },
];