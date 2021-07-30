import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AlbumsModule } from '../albums/albums.module';
import { PhotosModule } from '../photos/photos.module';
import { AppController } from './app.contoller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [UsersModule, AlbumsModule, PhotosModule , AuthModule],
  controllers: [AppController],
})
export class AppModule {}
