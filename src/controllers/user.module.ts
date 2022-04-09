/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/configs/database/database.module';
import { userProviders } from './user.provider';
import { UserService } from './user.service';

@Module({
    imports: [DatabaseModule],
    providers: [UserService, ...userProviders],
    exports: [UserService],
})
export class UserModule {}
