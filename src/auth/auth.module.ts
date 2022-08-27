import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from '@root/auth/auth.service';
import { AccountsRepository } from '@root/auth/accounts.repository';
import { LocalStrategy } from '@root/auth/strategies/local.strategy';
import { AuthController } from '@root/auth/auth.controller';
import { ConfigValuesHelper } from '@root/helpers/config-values.helper';
import { JwtStrategy } from '@root/auth/strategies/jwt.strategy';

const config = new ConfigValuesHelper();

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, AccountsRepository, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
