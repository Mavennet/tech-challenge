import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Album } from '../album/album.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

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
