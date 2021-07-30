import { ForbiddenException, Injectable } from '@nestjs/common';
import { albums } from '../common/DB/albumsDB';
import { FindAlbumsResponseDto } from './dto/albums.dto';

@Injectable()
export class AlbumsService {
  private albums = albums;

  getAlbums(userId: number): FindAlbumsResponseDto[] {
    return this.albums.filter((album) => {
      return album.userId === userId;
    });
  }

  getAlbumById(id: string, userId: number): FindAlbumsResponseDto {
    return this.albums.find((album) => {
      if (album.id.toString() === id && album.userId !== userId) {
        throw new ForbiddenException();
      }
      return album.id.toString() === id;
    });
  }
}
