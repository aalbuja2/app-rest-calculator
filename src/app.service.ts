import { Injectable } from '@nestjs/common';
import { OperationDto, OperationResponseDto } from './operation.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  addition(operationDto: OperationDto): OperationResponseDto {
    const { number1, number2 } = operationDto;
    const result = number1 + number2;
    return {
      number1,
      number2,
      result,
      operation: 'addition',
    };
  }
  subtraction(operationDto: OperationDto): OperationResponseDto {
    const { number1, number2 } = operationDto;
    const result = number1 - number2;
    return {
      number1,
      number2,
      result,
      operation: 'subtraction',
    };
  }

  multiplication(operationDto: OperationDto): OperationResponseDto {
    const { number1, number2 } = operationDto;
    const result = number1 * number2;
    return {
      number1,
      number2,
      result,
      operation: 'multiplication',
    };
  }

  division(operationDto: OperationDto): OperationResponseDto {
    const { number1, number2 } = operationDto;
    if (!number2) {
      throw new Error('Divide by 0 value');
    }
    const result = number1 / number2;
    return {
      number1,
      number2,
      result,
      operation: 'division',
    };
  }

  saveDB(operationType: OperationResponseDto) {
    return "";
  }
}
