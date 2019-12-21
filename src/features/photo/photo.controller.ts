import { Controller, UseInterceptors, UseGuards } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Crud, CrudRequestInterceptor } from '@nestjsx/crud';
import { Photo } from './photo.entity';
import { UserInterceptor } from '../../infrastructure/user.interceptor';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: {
    type: Photo,
  },
  query: {
    join: {
      user: {
        persist: ['id'],
        allow: ['id'],
        eager: true,
      },
    },
  },
})
@UseInterceptors(UserInterceptor, CrudRequestInterceptor)
@Controller('photos')
@UseGuards(AuthGuard('jwt'))
export class PhotoController {
  constructor(public service: PhotoService) {}
}
