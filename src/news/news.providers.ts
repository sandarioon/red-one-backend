import { News } from './news.entity';

export const NewsProviders = [{ provide: 'NewsRepository', useValue: News }];
