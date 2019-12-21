import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { addresses } from '../../features/address/address.seed';
import { companies } from '../../features/company/company.seed';
import { users } from '../../features/user/user.seed';
import { Address } from '../../features/address/address.entity';
import { Company } from '../../features/company/company.entity';
import { User } from '../../features/user/user.entity';

export class Initial1576871397856 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const addressesDb = await getRepository(Address).save(addresses);
    const companiesDb = await getRepository(Company).save(companies);

    users.forEach((user, index) => {
      user.address = addressesDb[index] as Address;
      user.company = companiesDb[index] as Company;
    });
    await getRepository(User).save(users);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    getRepository(Address).clear();
    getRepository(Company).clear();
    getRepository(User).clear();
  }
}
