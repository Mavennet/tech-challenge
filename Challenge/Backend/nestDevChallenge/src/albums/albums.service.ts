import { Injectable } from '@nestjs/common';
import { albums } from '../common/DB/albumsDB';
import { FindAlbumsResponseDto } from './dto/albums.dto';

@Injectable()
export class AlbumsService {
  private albums = albums;

  getAlbums(): FindAlbumsResponseDto[] {
    return this.albums;
  }

  getAlbumById(id: string): FindAlbumsResponseDto {
    return this.albums.find((album) => {
      return album.id.toString() === id;
    });
  }
}
