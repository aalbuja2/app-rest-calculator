import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationResponseDto } from './dto/response/response.dto';
import { OperationLog } from './entities/operation_log.entity';
import { mockOperation, mockOperationLog, mockOperationResponseService } from './mock-data';
import { OperationService } from './operation/operation.service';

describe('AppService', () => {

  let appService: AppService;
  let operationService: OperationService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService,
        {
          provide: OperationService,
          useFactory: () => ({
            create: jest.fn(),
          }),
        }],
      imports: [
      ],
    }).compile();

    appService = app.get<AppService>(AppService);
    operationService = app.get<OperationService>(OperationService);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  })

  describe('addition function', () => {
    it('Given two number then should return the addition result of number1 and number 2 "', () => {
      mockOperation.number1 = 0;
      mockOperation.number2 = 2;
      mockOperationResponseService.number1 = 0;
      mockOperationResponseService.number2 = 2;
      expect(appService.addition(mockOperation)).toStrictEqual(mockOperationResponseService);
    });

  });
  describe('multiplication function', () => {
    it('Given two number then should return the multiplication result of number1 and number 2 "', () => {
      mockOperation.number1 = 1;
      mockOperation.number2 = 2;
      mockOperationResponseService.number1 = 1;
      mockOperationResponseService.number2 = 2;
      mockOperationResponseService.operation = "multiplication";
      expect(appService.multiplication(mockOperation)).toStrictEqual(mockOperationResponseService);
    });

  });
  describe('substraction function', () => {
    it('Given two number then should return the substraction result of number1 and number 2 "', () => {
      mockOperation.number1 = 3;
      mockOperation.number2 = 1;
      mockOperationResponseService.number1 = 3;
      mockOperationResponseService.number2 = 1;
      mockOperationResponseService.operation = 'subtraction';
      expect(appService.subtraction(mockOperation)).toStrictEqual(mockOperationResponseService);
    });

  });
  describe('division function', () => {
    it('Given two number then should return the division result of number1 and number 2 "', () => {
      mockOperation.number1 = 4;
      mockOperation.number2 = 2;
      mockOperationResponseService.number1 = 4;
      mockOperationResponseService.number2 = 2;
      mockOperationResponseService.operation = 'division';
      expect(appService.division(mockOperation)).toStrictEqual(mockOperationResponseService);
    });

  });
});