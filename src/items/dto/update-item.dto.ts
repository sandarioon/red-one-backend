import { Length, IsString, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateItemDto {
  @IsOptional()
  @IsString()
  @Length(3, 20)
  readonly name: string;

  @IsOptional()
  @IsString()
  @Length(0, 255)
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly image: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  readonly categoryId: number;
}
