import { ForbiddenException, Injectable } from '@nestjs/common';
import { photos } from '../common/DB/photosDB';
import { albums } from '../common/DB/albumsDB';
import { FindPhotosResponseDto } from './dto/photos.dto';

@Injectable()
export class PhotosService {
  private photos = photos;
  private albums = albums;

  getPhotos(userId: number): FindPhotosResponseDto[] {
    return this.photos.filter((photo) => {
      return this.albums.find((album) => {
        return photo.albumId === album.id && album.userId === userId;
      });
    });
  }

  getPhotoById(id: string, userId: number): FindPhotosResponseDto {
    return this.photos.find((photo) => {
      return this.albums.find((album) => {
        if (
          photo.id.toString() === id &&
          photo.albumId === album.id &&
          album.userId !== userId
        ) {
          throw new ForbiddenException();
        }
        return (
          photo.id.toString() === id &&
          photo.albumId === album.id &&
          album.userId === userId
        );
      });
    });
  }
}
