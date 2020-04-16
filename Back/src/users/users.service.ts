import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly repositoryUser:Repository<Users>) {
        
    }
    save(user:Users){
        return this.repositoryUser.save(user);
    }
    getAll(){
        return this.repositoryUser.find();
    }
}
