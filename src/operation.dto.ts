import { IsNumber } from '@nestjs/class-validator';

export class OperationDto {
  @IsNumber()
  number1: number;
  @IsNumber()
  number2: number;
}

export class OperationResponseDto {
  @IsNumber()
  number1: number;
  @IsNumber()
  number2: number;
  @IsNumber()
  result: number;
}
