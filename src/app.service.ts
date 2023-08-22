import { Injectable } from '@nestjs/common';
import { UserDTO } from './users/dtos/user.dto';

@Injectable()
export class AppService {
  
  getHealth() {
    return "I'm okay!"
  }
  

}
