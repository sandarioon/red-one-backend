import { Injectable, Inject } from '@nestjs/common';
import { Modification } from './modifications.entity';
import { CreateModificationDto } from './dto/create-modification.dto';
import { UpdateModificationDto } from './dto/update-modification.dto';

@Injectable()
export class ModificationsService {
  constructor(
    @Inject('ModificationRepository')
    private readonly modificationRepository: typeof Modification,
  ) {}

  async getAllModifications() {
    return await this.modificationRepository.findAll({});
  }

  async getModification(id: string) {
    return await this.modificationRepository.findByPk(id);
  }

  async addModification(createModificationDto: CreateModificationDto) {
    const { name } = createModificationDto;
    return await this.modificationRepository.create({ name });
  }

  async deleteModification(id: string) {
    return await this.modificationRepository.destroy({
      where: {
        id,
      },
    });
  }

  async updateModification(
    id: string,
    updateModificationDto: UpdateModificationDto,
  ) {
    const modification = await this.getModification(id);
    modification.name = updateModificationDto.name || modification.name;
    return modification.save();
  }
}
