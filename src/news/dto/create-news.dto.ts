import { IsString, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateNewsDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly body: string;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  readonly hidden: boolean;
}
