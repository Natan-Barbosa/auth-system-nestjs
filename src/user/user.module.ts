import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepositoryModule } from 'src/infra/repositories/user.repository.module';
import { BcryptService } from 'src/shared/bcrypt.service';

@Module({
  imports: [UserRepositoryModule],
  controllers: [UserController],
  providers: [UserService, BcryptService],
})
export class UserModule { }
