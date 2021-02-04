import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Post {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Username Must Not Be Empty' })
  title: string;

  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Password Must Not Be Empty' })
  body: string;

  @ApiProperty()
  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
