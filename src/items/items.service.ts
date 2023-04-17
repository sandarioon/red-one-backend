import { Injectable, Inject } from '@nestjs/common';
import { Item } from './items.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class ItemsService {
  constructor(
    @Inject('ItemRepository')
    private readonly itemRepository: typeof Item,
    private readonly fileService: FilesService,
  ) {}

  async getAllItems() {
    const data = await this.itemRepository.findAll({});
    return data;
  }

  async getItem(id: string) {
    return await this.itemRepository.findByPk(id);
  }

  async addItem(createItemDto: CreateItemDto) {
    const { name, description, image, categoryId } = createItemDto;
    return await this.itemRepository.create({
      name,
      description,
      image,
      categoryId,
    });
  }

  async deleteItem(id: string) {
    return await this.itemRepository.destroy({
      where: {
        id,
      },
    });
  }

  async updateItem(id: string, updateItemDto: UpdateItemDto) {
    const item = await this.getItem(id);
    item.name = updateItemDto.name || item.name;
    item.description = updateItemDto.description || item.description;
    item.image = updateItemDto.image || item.image;
    item.categoryId = +updateItemDto.categoryId || item.categoryId;
    return item.save();
  }
}
