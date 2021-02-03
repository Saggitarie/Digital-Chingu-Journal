import { Controller, Get } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  fetchAllUsers(): Promise<UserInterface[]> {
    return this.userService.fetchAllUsers();
  }
}
