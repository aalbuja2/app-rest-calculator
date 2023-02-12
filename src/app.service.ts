import { Injectable } from '@nestjs/common';
import { OperationDto } from './dto/request/request.dto';
import { OperationResponseDto } from './dto/response/response.dto';
import { OperationLog } from './entities/operation_log.entity';
import { OperationService } from './operation/operation.service';

@Injectable()
export class AppService {

  constructor(
    private operationService: OperationService
  ) {

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

  async create(operationDto: OperationResponseDto): Promise<OperationLog> {
    return this.operationService.create(operationDto);
  }
}
