import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './infra/database/database.module';
import { UserRepositoryModule } from './infra/repositories/user.repository.module';

@Module({
  imports: [UserModule, DatabaseModule, UserRepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
