import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateNewsDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly body: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  readonly hidden: boolean;
}
