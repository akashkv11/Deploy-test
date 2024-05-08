import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SubService } from './sub.service';
import { calculationsDto } from './dto/sub.dto';

@Controller('sub')
export class SubController {
  constructor(private readonly subService: SubService) {}
  @Get('random')
  getRandom(): number {
    return this.subService.getRandomNumber();
  }

  @Post('add')
  @UsePipes(new ValidationPipe())
  addToNumbers(@Body() dto: calculationsDto): number {
    return this.subService.addNumbers(dto.num1, dto.num2);
  }

  @Post('multiply')
  @UsePipes(new ValidationPipe())
  multiplyToNumbers(@Body() dto: calculationsDto): number {
    return this.subService.multiply(dto.num1, dto.num2);
  }
}
