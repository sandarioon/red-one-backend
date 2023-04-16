import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getItems() {
    return await this.itemsService.getAllItems();
  }

  @Get(':id')
  async getItem(@Param('id') id: string) {
    return await this.itemsService.getItem(id);
  }

  @Post('/add')
  async addItem(@Body() createItemDto: CreateItemDto) {
    return await this.itemsService.addItem(createItemDto);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    return await this.itemsService.deleteItem(id);
  }

  @Put(':id')
  async updateItem(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    console.log(typeof updateItemDto.categoryId);
    return await this.itemsService.updateItem(id, updateItemDto);
  }
}
