import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OperationResponseDto } from 'src/operation.dto';
import { OperationLog } from '../entities/operation_log.entity';

@Injectable()
export class OperationService {
  constructor(
    @InjectRepository(OperationLog)
    private readonly usersRepository: Repository<OperationLog>,
  ) { }

  create(createOperationLog: OperationResponseDto): Promise<OperationLog> {
    try {
      return this.usersRepository.save({
        createdAt: new Date(),
        ...createOperationLog,
      });
    }
    catch (error) {
      console.log(error);
    }

  }
}