import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  heartbeat(): string {
    return 'ok';
  }
}
