import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getAllNews() {
    return await this.newsService.getAllNews();
  }

  @Get(':id')
  async getNews(@Param('id') id: string) {
    return await this.newsService.getNews(id);
  }

  @Post('/add')
  async addCategory(@Body() createNewsDto: CreateNewsDto) {
    return await this.newsService.addNews(createNewsDto);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    return await this.newsService.deleteNews(id);
  }

  @Put(':id')
  async updateNews(
    @Param('id') id: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ) {
    return await this.newsService.updateNews(id, updateNewsDto);
  }
}
