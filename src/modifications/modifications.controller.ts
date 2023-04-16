import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ModificationsService } from './modifications.service';
import { CreateModificationDto } from './dto/create-modification.dto';
import { UpdateModificationDto } from './dto/update-modification.dto';

@Controller('modifications')
export class ModificationsController {
  constructor(private readonly modificationsService: ModificationsService) {}

  @Get()
  async getModifications() {
    return await this.modificationsService.getAllModifications();
  }

  @Get(':id')
  async getModification(@Param('id') id: string) {
    return await this.modificationsService.getModification(id);
  }

  @Post('/add')
  async addCategory(@Body() createModificationDto: CreateModificationDto) {
    return await this.modificationsService.addModification(
      createModificationDto,
    );
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    return await this.modificationsService.deleteModification(id);
  }

  @Put(':id')
  async updateModification(
    @Param('id') id: string,
    @Body() updateModificationDto: UpdateModificationDto,
  ) {
    return await this.modificationsService.updateModification(
      id,
      updateModificationDto,
    );
  }
}
