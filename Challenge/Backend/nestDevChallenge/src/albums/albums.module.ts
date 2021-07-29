import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AlbumController } from './albums.controller';
import { AlbumsService } from './albums.service';
import { ValidAlbumMiddleware } from '../common/middlewares/validAlbum.middleware';

@Module({
  controllers: [AlbumController],
  providers: [AlbumsService],
  exports: [AlbumsService],
})
export class AlbumsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidAlbumMiddleware).forRoutes({
      path: 'albums/:albumId',
      method: RequestMethod.GET,
    });
  }
}
