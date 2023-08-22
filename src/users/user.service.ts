import { Injectable } from '@nestjs/common';
import { UserDTO } from './dtos/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    private users: User[]
    constructor(){
        this.users = [];
    }

    createUser(body: UserDTO) {
        
        return this.users.push(new User(body))
    }
}
