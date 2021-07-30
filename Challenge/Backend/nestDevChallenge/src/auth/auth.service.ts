import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

    async validateUser(username: string, password: string): Promise<any>{
        const user = await this.userService.findOne(username)

        if(user && user.phone === password){
            const {id , username} = user
            return {id , username}
        }

        return null
    }
}
