import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService extends TypeOrmCrudService<Photo> {
  constructor(@InjectRepository(Photo) repository) {
    super(repository);
  }
}
