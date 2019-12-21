import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from '../user/user.module';
import { AddressModule } from '../address/address.module';
import { CompanyModule } from '../company/company.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionOptions } from '../../persistence/db-connection-options';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    CompanyModule,
    TypeOrmModule.forRoot(connectionOptions),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
