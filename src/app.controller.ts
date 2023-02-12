import { Body, Controller, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { OperationDto } from './dto/request/request.dto';
import { OperationLog } from './entities/operation_log.entity';
import { OperationService } from './operation/operation.service';

@Controller('operation')
export class AppController {
  constructor(
    private readonly appService: AppService
  ) { }

  @Put('addition')
  async addition(@Body() operationDto: OperationDto): Promise<OperationLog> {
    try {
      const result = this.appService.addition(operationDto);
      return this.appService.create(result);
    } catch (error) {
      console.log(error);
    }
  }
  @Put('substraction')
  subtraction(@Body() operationDto: OperationDto): Promise<OperationLog> {
    const result = this.appService.subtraction(operationDto);

    return this.appService.create(result);
  }
  @Put('multiplication')
  multiplication(@Body() operationDto: OperationDto): Promise<OperationLog> {
    const result = this.appService.multiplication(operationDto);
    return this.appService.create(result);
  }
  @Put('division')
  division(@Body() operationDto: OperationDto): Promise<OperationLog> {
    try {
      const result = this.appService.division(operationDto);
      return this.appService.create(result);
    } catch (e) {
      console.log(e);
    }
  }
}
