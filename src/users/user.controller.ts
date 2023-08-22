import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserDTO } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
    

    constructor(private readonly userService: UserService) {}

    @Post('/sign-up')
    @HttpCode(HttpStatus.OK)
    createUser(@Body() body: UserDTO) {
        return this.userService.createUser(body)
    }

}
