import { IsNumber } from '@nestjs/class-validator';

export class OperationDto {
  @IsNumber()
  number1: number;
  @IsNumber()
  number2: number;
}

export class OperationResponseDto {
  number1: number;
  number2: number;
  result: number;
  operation: string;
}
