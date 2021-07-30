import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { FindPhotosResponseDto } from './dto/photos.dto';

import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotoController {
  constructor(private readonly PhotosService: PhotosService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  getPhotos(@Request() req): FindPhotosResponseDto[] {
    return this.PhotosService.getPhotos(req.user.id);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/:photoId')
  getPhotoById(
    @Param('photoId') photoId: string,
    @Request() req,
  ): FindPhotosResponseDto {
    return this.PhotosService.getPhotoById(photoId , req.user.id);
  }
}
