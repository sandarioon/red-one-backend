import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { FileInterceptor } from '@nestjs/platform-express';

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

  @Post('/create')
  @UseInterceptors(FileInterceptor('image'))
  async addNews(
    @Body() createNewsDto: CreateNewsDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return await this.newsService.addNews(createNewsDto, image);
  }

  @Delete(':id')
  async deleteNews(@Param('id') id: string) {
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
