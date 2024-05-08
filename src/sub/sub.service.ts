import { Injectable } from '@nestjs/common';

@Injectable()
export class SubService {
  getRandomNumber(): number {
    const num = Math.floor(Math.random() * 100);
    console.log(num, num, num);
    return num;
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }

  multiply(num1: number, num2: number): number { 
  return num1 * num2;}
}
