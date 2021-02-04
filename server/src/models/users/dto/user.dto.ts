import { IsInt, IsString } from 'class-validator';

export class UserDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
