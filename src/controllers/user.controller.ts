/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/all')
    findAll(){
        return this.userService.findAll();
    }
    @Post('/register')
    register(@Body() user: User){
        return this.userService.register(user);
    }
    @Delete('/delete/:id')
    delete(@Query('id') id: number){
        return this.userService.delete(id);
    }
    @Put('/alter')
    alter(@Body() user: User){
        return this.userService.alter(user);
    }
}
