import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { albums } from '../DB/albumsDB';

@Injectable()
export class ValidAlbumMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const albumId = req.params.albumId;
    const albumExists = albums.some((album) => {
      return album.id.toString() === albumId;
    });
    if (!albumExists) {
      throw new HttpException('Album not found', 400);
    }
    next();
  }
}
