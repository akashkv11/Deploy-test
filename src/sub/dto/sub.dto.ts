import { IsInt, IsNotEmpty } from 'class-validator';

export class calculationsDto {
  @IsNotEmpty()
  @IsInt()
  readonly num1: number;

  @IsNotEmpty()
  @IsInt()
  readonly num2: number;
}
