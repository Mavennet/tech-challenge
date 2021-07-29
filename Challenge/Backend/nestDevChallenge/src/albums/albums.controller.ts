import { Controller, Get, Param } from '@nestjs/common';
import { FindAlbumsResponseDto } from './dto/albums.dto';

import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumController {
  constructor(private readonly AlbumsService: AlbumsService) {}

  @Get()
  getAlbums(): FindAlbumsResponseDto[] {
    return this.AlbumsService.getAlbums();
  }

  @Get('/:albumId')
  getAlbumById(@Param('albumId') albumId: string): FindAlbumsResponseDto {
    return this.AlbumsService.getAlbumById(albumId);
  }
}
