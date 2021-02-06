import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { UserInterface } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async fetchAllUsers(): Promise<Users[]> {
    return await this.userRepository.find();
  }

  async createUser(user: UserInterface): Promise<void> {
    await this.userRepository.insert({
      username: user.username,
      password: user.password,
    });
  }
}
