import { Controller, Get } from '@nestjs/common';
import { SubService } from './sub.service';

@Controller('sub')
export class SubController {
  constructor(private readonly subService: SubService) {}
  @Get('random')
  getRandom(): number {
    return this.subService.getRandomNumber();
  }
}
