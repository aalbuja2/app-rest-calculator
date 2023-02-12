import { Test, TestingModule } from '@nestjs/testing';
import { OperationLog } from '../entities/operation_log.entity';
import { mockOperation, mockOperationLog, mockOperationResponseService } from '../mock-data';
import { OperationService } from '../operation/operation.service';
import {
  Repository,
} from 'typeorm';

import {
  getRepositoryToken
} from '@nestjs/typeorm'

describe('OperationService', () => {
  let service: OperationService;
  let repositoryMock: Repository<OperationLog>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationService,
        {
          provide: getRepositoryToken(OperationLog),
          useFactory: () => ({
            save: jest.fn(),
          }),
        },
      ],
    }).compile();

    service = module.get<OperationService>(OperationService);
    repositoryMock = module.get(getRepositoryToken(OperationLog));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('save function', () => {
    it('Given a operation should save on databse', async () => {
      mockOperationResponseService.operation = "division"
      jest.spyOn(repositoryMock, 'save').mockImplementationOnce((): Promise<OperationLog> => Promise.resolve(mockOperationLog));
      expect(await service.create(mockOperationResponseService)).toBe(mockOperationLog);
    });

  });
});
