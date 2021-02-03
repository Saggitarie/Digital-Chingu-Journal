import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

import { User } from '../../users/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Username Must Not Be Empty' })
  title: string;

  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Password Must Not Be Empty' })
  body: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
