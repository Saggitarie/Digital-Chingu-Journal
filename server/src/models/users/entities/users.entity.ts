import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
  JoinColumn,
} from 'typeorm';

import { IsNotEmpty } from 'class-validator';

import { BlogPost } from '../../posts/entities/blog-post.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
@Unique(['username'])
export class Users {
  /**
   * The name of the User
   * @example Kohki
   */

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Username Must Not Be Empty' })
  username: string;

  @ApiProperty()
  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Password Must Not Be Empty' })
  password: string;

  @ApiProperty()
  @Column({ nullable: true })
  created_at: string;

  @ApiProperty()
  @OneToMany(() => BlogPost, (post) => post.user)
  @JoinColumn({ name: 'user_id' })
  posts: BlogPost[];
}
