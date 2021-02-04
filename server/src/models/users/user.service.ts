import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserInterface } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async fetchAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(user: UserInterface): Promise<void> {
    await this.userRepository.insert({
      username: user.username,
      password: user.password,
    });
  }
}
