import { Body, Controller, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { OperationDto, OperationResponseDto } from './operation.dto';

@Controller('operation')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Put('addition')
  addition(@Body() operationDto: OperationDto): OperationResponseDto {
    return this.appService.addition(operationDto);
  }
  @Put('substraction')
  subtraction(@Body() operationDto: OperationDto): OperationResponseDto {
    return this.appService.subtraction(operationDto);
  }
  @Put('multiplication')
  multiplication(@Body() operationDto: OperationDto): OperationResponseDto {
    return this.appService.multiplication(operationDto);
  }
  @Put('division')
  division(@Body() operationDto: OperationDto): OperationResponseDto {
    try {
      return this.appService.division(operationDto);
    } catch (e) {
      console.log(e);
    }
  }
}
