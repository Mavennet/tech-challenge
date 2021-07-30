import { Controller, Post , Request, UseGuards} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';


@Controller()
export class AppController {
  

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return {msg: 'Logged In!'};
  }
}
