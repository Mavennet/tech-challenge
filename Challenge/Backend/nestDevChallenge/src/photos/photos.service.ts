import { Injectable } from '@nestjs/common';
import { photos } from '../common/DB/photosDB';
import { FindPhotosResponseDto } from './dto/photos.dto';


@Injectable()
export class PhotosService {
  private photos = photos;

  getPhotos(): FindPhotosResponseDto[] {
    return this.photos;
  }

  getPhotoById(id: string): FindPhotosResponseDto {
    return this.photos.find((photo) => {
      return photo.id.toString() === id;
    });
  }
}
