import { UserDTO } from "../dtos/user.dto";

export class User {
    private _username: string
    private _avatar: string

    constructor(body: UserDTO) {
        const {username, avatar} = body
        this._username = username;
        this._avatar = avatar;
    }
    get username() {
        return this._username;
    }

    get avatar() {
        return this._avatar;
    }
}