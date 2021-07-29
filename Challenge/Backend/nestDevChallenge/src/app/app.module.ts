import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AlbumsModule } from '../albums/albums.module';
import { PhotosModule } from '../photos/photos.module';

@Module({
  imports: [UsersModule, AlbumsModule, PhotosModule],
})
export class AppModule {}
