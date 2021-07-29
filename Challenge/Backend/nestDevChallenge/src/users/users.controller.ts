import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindUsersResponseDto } from './dto/users.dto';

import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  getUsers(): FindUsersResponseDto[] {
    return this.UsersService.getUsers();
  }

  @Get('/:userId')
  getUserById(@Param('userId') userId: string): FindUsersResponseDto {
    return this.UsersService.getUserById(userId);
  }
}
