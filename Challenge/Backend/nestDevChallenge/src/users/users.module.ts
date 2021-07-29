import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { ValidUserMiddleware } from '../common/middlewares/validUser.middleware';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidUserMiddleware).forRoutes({
      path: 'users/:userId',
      method: RequestMethod.GET,
    });
  }
}
