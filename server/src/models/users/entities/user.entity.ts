import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
} from 'typeorm';

import { IsNotEmpty } from 'class-validator';

import { Post } from '../../posts/entities/post.entity';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Username Must Not Be Empty' })
  username: string;

  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Password Must Not Be Empty' })
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  user: User;
}
