import { Modification } from './modifications.entity';

export const ModificationProviders = [
  { provide: 'ModificationRepository', useValue: Modification },
];
