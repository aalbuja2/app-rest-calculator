import { OperationDto } from "src/dto/request/request.dto";
import { OperationResponseDto } from "src/dto/response/response.dto";
import { OperationLog } from "src/entities/operation_log.entity";


export const mockOperation: OperationDto = {
  number1: 4,
  number2: 2
}

export const mockOperationResponseService: OperationResponseDto = {
  number1: mockOperation.number1,
  number2: mockOperation.number2,
  result: 2,
  operation: "addition",
}

export const mockOperationLog: OperationLog = {
  id: 1,
  ...mockOperationResponseService,
  createdAt: new Date(),
}