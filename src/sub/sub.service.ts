import { Injectable } from '@nestjs/common';

@Injectable()
export class SubService {
  getRandomNumber(): number {
    const num = Math.floor(Math.random() * 100);
    console.log(num, num, num);
    return num;
  }
}
