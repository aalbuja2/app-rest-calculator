import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationResponseDto } from './dto/response/response.dto';
import { OperationLog } from './entities/operation_log.entity';
import { mockOperation, mockOperationLog, mockOperationResponseService } from './mock-data';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService,
        {
          provide: AppService,
          useFactory: () => ({
            addition: jest.fn(),
            subtraction: jest.fn(),
            multiplication: jest.fn(),
            division: jest.fn(),
            create: jest.fn(),
          }),
        }],
      imports: [
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  })

  describe('addition function', () => {
    it('Given two number then should return the addition result of number1 and number 2 "', async () => {
      mockOperation.number1 = 1;
      mockOperation.number2 = 2;
      jest.spyOn(appService, 'addition').mockReturnValue(mockOperationResponseService);
      jest.spyOn(appService, 'create').mockImplementationOnce((): Promise<OperationLog> => Promise.resolve(mockOperationLog));
      expect(await appController.addition(mockOperation)).toBe(mockOperationLog);
    });

  });

  describe('substracion function', () => {
    it('Given two number then should return the addition result of number1 and number 2 "', async () => {
      mockOperation.number1 = 3;
      mockOperation.number2 = 1;
      mockOperationResponseService.operation = "substracion";
      jest.spyOn(appService, 'subtraction').mockReturnValue(mockOperationResponseService);
      jest.spyOn(appService, 'create').mockImplementationOnce((): Promise<OperationLog> => Promise.resolve(mockOperationLog));
      expect(await appController.subtraction(mockOperation)).toBe(mockOperationLog);
    });

  });
  describe('multiplication function', () => {
    it('Given two number then should return the addition result of number1 and number 2 "', async () => {
      mockOperation.number1 = 1;
      mockOperation.number2 = 2;
      mockOperationLog.operation = "multiplication"
      jest.spyOn(appService, 'multiplication').mockReturnValue(mockOperationLog);
      jest.spyOn(appService, 'create').mockImplementationOnce((): Promise<OperationLog> => Promise.resolve(mockOperationLog));
      expect(await appController.multiplication(mockOperation)).toBe(mockOperationLog);
    });

  });
  describe('division function', () => {
    it('Given two number then should return the addition result of number1 and number 2 "', async () => {
      mockOperation.number1 = 4;
      mockOperation.number2 = 2;
      mockOperationLog.operation = "division"
      jest.spyOn(appService, 'division').mockReturnValue(mockOperationLog);
      jest.spyOn(appService, 'create').mockImplementationOnce((): Promise<OperationLog> => Promise.resolve(mockOperationLog));
      expect(await appController.division(mockOperation)).toBe(mockOperationLog);
    });

  });
});
