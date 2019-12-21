import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Photo } from '../photo/photo.entity';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => User,
    user => user.albums,
  )
  user: User;

  @Column()
  title: string;

  @OneToMany(
    type => Photo,
    photo => photo.album,
  )
  photos: Photo[];
}
