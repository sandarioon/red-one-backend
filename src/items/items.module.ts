import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemProviders } from './items.providers';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, ...ItemProviders],
  exports: [],
})
export class ItemsModule {}
