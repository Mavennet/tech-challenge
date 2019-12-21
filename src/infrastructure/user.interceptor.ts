import {
  NestInterceptor,
  Injectable,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();

    if (req.method === 'POST') {
      req.body.userId = req.user.id;
    } else {
      req.query.filter = `user.id||eq||${req.user.id}`;
    }
    return next.handle();
  }
}
