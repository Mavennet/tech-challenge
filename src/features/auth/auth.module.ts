import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { SessionSerializer } from './utils/session-serializer';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwt.secret,
      signOptions: { expiresIn: jwt.duration },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
