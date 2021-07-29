import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { PhotoController } from './photos.controller';
import { PhotosService } from './photos.service';
import { ValidPhotoMiddleware } from '../common/middlewares/validPhoto.middleware';

@Module({
  controllers: [PhotoController],
  providers: [PhotosService],
  exports: [PhotosService],
})
export class PhotosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidPhotoMiddleware).forRoutes({
      path: 'photos/:photoId',
      method: RequestMethod.GET,
    });
  }
}
