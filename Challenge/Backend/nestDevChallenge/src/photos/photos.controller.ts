import { Controller, Get, Param } from '@nestjs/common';
import { FindPhotosResponseDto } from './dto/photos.dto';

import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotoController {
  constructor(private readonly PhotosService: PhotosService) {}

  @Get()
  getPhotos(): FindPhotosResponseDto[] {
    return this.PhotosService.getPhotos();
  }

  @Get('/:photoId')
  getPhotoById(@Param('photoId') photoId: string): FindPhotosResponseDto {
    return this.PhotosService.getPhotoById(photoId);
  }
}
