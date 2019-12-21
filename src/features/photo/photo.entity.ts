import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Album } from '../album/album.entity';
import { User } from '../user/user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => User,
    user => user.photos,
  )
  user: User;

  @ManyToOne(
    type => Album,
    album => album.photos,
  )
  album: Album;

  @Column()
  title: string;

  @Column()
  thumbnailUrl: string;

  @Column()
  url: string;
}
