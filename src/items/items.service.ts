import { Injectable, Inject } from '@nestjs/common';
import { Item } from './items.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @Inject('ItemRepository')
    private readonly itemRepository: typeof Item,
  ) {}

  async getAllItems() {
    const data = await this.itemRepository.findAll({});
    console.log(data);
    return data;
  }

  async getItem(id: string) {
    return await this.itemRepository.findByPk(id);
  }

  async addItem(createItemDto: CreateItemDto) {
    const { name, description, imageURL, categoryId } = createItemDto;
    return await this.itemRepository.create({
      name,
      description,
      imageURL,
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
    item.imageURL = updateItemDto.imageURL || item.imageURL;
    item.categoryId = +updateItemDto.categoryId || item.categoryId;
    return item.save();
  }
}
