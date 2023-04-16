import { Item } from './items.entity';

export const ItemProviders = [{ provide: 'ItemRepository', useValue: Item }];
