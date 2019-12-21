import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(userName: string, pass: string): Promise<User> {
    const user = await this.usersService.findOne({
      where: { userName: userName },
    });
    // hard code for simplicity
    // in production code we will compare hashes
    if (user && pass === 'Qwerty001') {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      ...user,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
