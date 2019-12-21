import { Controller } from '@nestjs/common';
import { AlbumService } from './album.service';
import { Crud } from '@nestjsx/crud';
import { Album } from './album.entity';

@Crud({
  model: {
    type: Album,
  },
})
@Controller('albums')
export class AlbumController {
  constructor(public service: AlbumService) {}
}
