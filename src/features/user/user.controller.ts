import { Controller } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: User,
  },
  query: {
    join: {
      address: {
        eager: true,
      },
      company: {
        eager: true,
      },
    },
  },
})
@Controller('users')
export class UserController {
  constructor(public service: UserService) {}
}
