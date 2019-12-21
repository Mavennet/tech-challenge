import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { addresses } from '../../features/address/address.seed';
import { companies } from '../../features/company/company.seed';
import { users } from '../../features/user/user.seed';
import { Address } from '../../features/address/address.entity';
import { Company } from '../../features/company/company.entity';
import { User } from '../../features/user/user.entity';
import { photos } from '../../features/photo/photo.seed';
import { albums } from '../../features/album/albums.seed';
import { Album } from '../../features/album/album.entity';
import { Photo } from '../../features/photo/photo.entity';

export class Initial1576871397856 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const addressesDb = await getRepository(Address).save(addresses);
    const companiesDb = await getRepository(Company).save(companies);

    users.forEach((user, index) => {
      user.address = addressesDb[index] as Address;
      user.company = companiesDb[index] as Company;
    });
    const usersDb = await getRepository(User).save(users);

    albums.forEach(
      (album, index) => (album.user = usersDb[Math.floor(index / 10)]),
    );
    const albumsDb = await getRepository(Album).save(albums);

    photos.forEach((photo, index) => (photo.album = albumsDb[index % 5]));
    await getRepository(Photo).save(photos);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    getRepository(Address).clear();
    getRepository(Company).clear();
    getRepository(User).clear();
    getRepository(Album).clear();
    getRepository(Photo).clear();
  }
}
