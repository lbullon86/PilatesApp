import { Users } from './users.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAll(): Promise<any[]>;
    save(user: Users): Promise<Users>;
}
