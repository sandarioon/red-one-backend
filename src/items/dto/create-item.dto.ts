import { Length, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateItemDto {
  @IsString()
  @Length(3, 20)
  readonly name: string;

  @IsString()
  @Length(0, 255)
  readonly description: string;

  @IsString()
  readonly image: string;

  @IsNumber()
  @Type(() => Number)
  readonly categoryId: number;
}
