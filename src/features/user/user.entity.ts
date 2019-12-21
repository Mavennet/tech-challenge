import { Address } from '../address/address.entity';
import { Company } from '../company/company.entity';
import { Entity, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Album } from '../album/album.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @OneToOne(type => Address)
  @JoinColumn()
  address: Address;

  @Column()
  phone: string;

  @Column()
  website: string;

  @ManyToOne(
    type => Company,
    company => company.users,
  )
  company: Company;

  @OneToMany(
    type => Album,
    album => album.user,
  )
  albums: Album[];
}
