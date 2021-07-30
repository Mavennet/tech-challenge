import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { FindAlbumsResponseDto } from './dto/albums.dto';

import { AlbumsService } from './albums.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('albums')
export class AlbumController {
  constructor(private readonly AlbumsService: AlbumsService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  getAlbums(@Request() req): FindAlbumsResponseDto[] {
    return this.AlbumsService.getAlbums(req.user.id);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/:albumId')
  getAlbumById(
    @Param('albumId') albumId: string,
    @Request() req,
  ): FindAlbumsResponseDto {
    return this.AlbumsService.getAlbumById(albumId, req.user.id);
  }
}
