import { IsNotEmpty, IsString, IsUrl } from "class-validator"


const errorMessage = "All fields are required!";

export class UserDTO {
    
    @IsString()
    @IsNotEmpty({message:errorMessage})
    username: string
    
    @IsUrl()
    @IsNotEmpty({message: errorMessage})
    avatar: string
}