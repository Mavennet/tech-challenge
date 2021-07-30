import { Injectable } from '@nestjs/common';
import { users } from '../common/DB/usersDB';
import { FindUsersResponseDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  private users = users;

  getUsers(): FindUsersResponseDto[] {
    return this.users;
  }

  getUserById(id: string): FindUsersResponseDto {
    return this.users.find((user) => {
      return user.id.toString() === id;
    });
  }

  async findOne(username: string): Promise<FindUsersResponseDto | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
