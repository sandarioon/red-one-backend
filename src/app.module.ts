import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { CategoriesModule } from './categories/categories.module';
import { ModificationsModule } from './modifications/modifications.module';
import { ItemsModule } from './items/items.module';
import { NewsModule } from './news/news.module';

import { Category } from './categories/categories.entity';
import { Modification } from './modifications/modifications.entity';
import { Item } from './items/items.entity';
import { News } from './news/news.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'sandarion',
      password: 'bangbang123',
      database: 'postgres',
      models: [Category, Item, Modification, News],
      autoLoadModels: true,
    }),
    CategoriesModule,
    ItemsModule,
    ModificationsModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
