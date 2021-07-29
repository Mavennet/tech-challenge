import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { users } from '../DB/usersDB';

@Injectable()
export class ValidUserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const userId = req.params.userId;
    const userExists = users.some((user) => {
      return user.id.toString() === userId;
    });
    if (!userExists) {
      throw new HttpException('User not found', 400);
    }
    next();
  }
}
