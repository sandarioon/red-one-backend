import { Inject, Injectable } from '@nestjs/common';
import { Category } from './categories.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: typeof Category,
  ) {}

  async getAllCategories() {
    return await this.categoryRepository.findAll({});
  }

  async getCategory(id: string) {
    return await this.categoryRepository.findByPk(id);
  }

  async addCategory(createCategoryDto: CreateCategoryDto) {
    const { name } = createCategoryDto;
    return await this.categoryRepository.create({ name });
  }

  async deleteCategory(id: string) {
    return await this.categoryRepository.destroy({
      where: {
        id,
      },
    });
  }

  async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.getCategory(id);
    category.name = updateCategoryDto.name || category.name;
    return category.save();
  }
}
