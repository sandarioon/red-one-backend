import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateNewsDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly body: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  readonly hidden: boolean;
}
