import { Controller, Get, Post, Body } from '@nestjs/common';
import { Users} from './users.entity'
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor (private readonly userService:UsersService){

    }

    @Get()
    getAll(): Promise <any[]>{
        return this.userService.getAll();

    }
    @Post()
    save(@Body() user:Users){
        return this.userService.save(user)
    }
}
