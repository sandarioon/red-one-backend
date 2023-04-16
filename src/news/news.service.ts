import { Injectable, Inject } from '@nestjs/common';
import { News } from './news.entity';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @Inject('NewsRepository')
    private readonly newsRepository: typeof News,
  ) {}

  async getAllNews() {
    const data = await this.newsRepository.findAll({});
    console.log(data);
    return data;
  }

  async getNews(id: string) {
    return await this.newsRepository.findByPk(id);
  }

  async addNews(createNewsDto: CreateNewsDto) {
    const { title, body, hidden } = createNewsDto;
    return await this.newsRepository.create({
      title,
      body,
      hidden,
    });
  }

  async deleteNews(id: string) {
    return await this.newsRepository.destroy({
      where: {
        id,
      },
    });
  }

  async updateNews(id: string, updateNewsDto: UpdateNewsDto) {
    const news = await this.getNews(id);
    news.title = updateNewsDto.title || news.title;
    news.body = updateNewsDto.body || news.body;
    news.hidden = updateNewsDto.hidden || news.hidden;
    return news.save();
  }
}
