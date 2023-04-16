import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsProviders } from './news.providers';

@Module({
  controllers: [NewsController],
  providers: [NewsService, ...NewsProviders],
  exports: [],
})
export class NewsModule {}
