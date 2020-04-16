import { Users } from './users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly repositoryUser;
    constructor(repositoryUser: Repository<Users>);
    save(user: Users): Promise<Users>;
    getAll(): Promise<Users[]>;
}
