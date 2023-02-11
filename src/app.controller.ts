import { Body, Controller, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { OperationDto } from './operation.dto';
import { OperationLog } from './entities/operation_log.entity';
import { OperationService } from './operation/operation.service';

@Controller('operation')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly operationService: OperationService,
  ) { }

  @Put('addition')
  addition(@Body() operationDto: OperationDto): Promise<OperationLog> {
    try {
      const result = this.appService.addition(operationDto);
      return this.operationService.create(result);
    } catch (error) {
      console.log(error);
    }
  }
  @Put('substraction')
  subtraction(@Body() operationDto: OperationDto): Promise<OperationLog> {
    const result = this.appService.subtraction(operationDto);

    return this.operationService.create(result);
  }
  @Put('multiplication')
  multiplication(@Body() operationDto: OperationDto): Promise<OperationLog> {
    const result = this.appService.multiplication(operationDto);
    return this.operationService.create(result);
  }
  @Put('division')
  division(@Body() operationDto: OperationDto): Promise<OperationLog> {
    try {
      const result = this.appService.division(operationDto);
      return this.operationService.create(result);
    } catch (e) {
      console.log(e);
    }
  }
}
