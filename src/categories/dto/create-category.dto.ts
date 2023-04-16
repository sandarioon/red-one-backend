import { Length, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @Length(3, 20)
  readonly name: string;
}
