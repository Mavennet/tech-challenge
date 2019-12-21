import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Album } from './album.entity';

@Injectable()
export class AlbumService extends TypeOrmCrudService<Album> {
  constructor(@InjectRepository(Album) repository) {
    super(repository);
  }
}
