import { ConnectionOptions } from 'typeorm';

export const connectionOptions: ConnectionOptions = {
  type: 'sqlite',
  database: 'sqlite3',
  entities: [__dirname + '../../**/*entity{.ts,.js}'],
  migrations: [__dirname + '../../**/migrations/*{.ts,.js}'],
  migrationsRun: true,
  logger: 'advanced-console',
  synchronize: true,
};
