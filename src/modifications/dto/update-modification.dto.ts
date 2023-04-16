import { Length, IsString, IsOptional } from 'class-validator';

export class UpdateModificationDto {
  @IsOptional()
  @IsString()
  @Length(3, 20)
  readonly name: string;
}
