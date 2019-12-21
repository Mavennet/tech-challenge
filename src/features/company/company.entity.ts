import { Column, OneToMany, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  catchPhrase: string;

  @Column()
  bs: string;

  @OneToMany(
    type => User,
    user => user.company,
  )
  users: User[];
}
