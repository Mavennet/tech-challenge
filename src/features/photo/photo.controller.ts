import { Controller } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Crud } from '@nestjsx/crud';
import { Photo } from './photo.entity';

@Crud({
  model: {
    type: Photo,
  },
})
@Controller('photos')
export class PhotoController {
  constructor(public service: PhotoService) {}
}
