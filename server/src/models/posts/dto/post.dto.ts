import { IsInt, IsString } from 'class-validator';

export class PostDto {
  @IsInt()
  id: number;

  @IsString()
  title: string;

  @IsString()
  body?: string;
}
