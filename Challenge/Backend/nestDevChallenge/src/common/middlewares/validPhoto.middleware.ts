import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { photos } from '../DB/photosDB';

@Injectable()
export class ValidPhotoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const photoId = req.params.photoId;
    const photoExists = photos.some((photo) => {
      return photo.id.toString() === photoId;
    });
    if (!photoExists) {
      throw new HttpException('Photo not found', 400);
    }
    next();
  }
}
