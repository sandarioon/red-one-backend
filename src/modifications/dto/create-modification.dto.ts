import { Length, IsString } from 'class-validator';

export class CreateModificationDto {
  @IsString()
  @Length(3, 20)
  readonly name: string;
}
