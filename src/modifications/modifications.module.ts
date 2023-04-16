import { Module } from '@nestjs/common';
import { ModificationsController } from './modifications.controller';
import { ModificationsService } from './modifications.service';
import { ModificationProviders } from './modifications.providers';

@Module({
  controllers: [ModificationsController],
  providers: [ModificationsService, ...ModificationProviders],
  exports: [],
})
export class ModificationsModule {}
