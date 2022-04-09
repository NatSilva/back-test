import { UserModule } from './controllers/user.module';
import { UserController } from './controllers/user.controller';
import { DatabaseModule } from './configs/database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './controllers/user.service';

@Module({
  imports: [
    UserModule,
    DatabaseModule,],
  providers: [AppService],
  controllers: [AppController, UserController],
})
export class AppModule { }
