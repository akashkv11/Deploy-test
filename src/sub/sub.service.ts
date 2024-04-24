import { Injectable } from '@nestjs/common';

@Injectable()
export class SubService {
  getRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }
}
