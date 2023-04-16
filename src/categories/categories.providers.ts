import { Category } from './categories.entity';

export const categoryProviders = [
  { provide: 'CategoryRepository', useValue: Category },
];
