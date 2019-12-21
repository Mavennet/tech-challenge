import { Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { AlbumService } from './album.service';
import { Crud, CrudRequestInterceptor } from '@nestjsx/crud';
import { Album } from './album.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserInterceptor } from '../../infrastructure/user.interceptor';

@Crud({
  model: {
    type: Album,
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
@Controller('albums')
@UseGuards(AuthGuard('jwt'))
export class AlbumController {
  constructor(public service: AlbumService) {}
}
