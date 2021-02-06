import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

import { Users } from '../../users/entities/users.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class BlogPost {
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
  @ManyToOne(() => Users, (users) => users.posts)
  user: Users;
}
