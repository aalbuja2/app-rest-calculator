import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationLog } from '../entities/operation_log.entity';
import { OperationService } from './operation.service';

@Module({
  imports: [TypeOrmModule.forFeature([OperationLog])],
  providers: [OperationService],
  exports: [OperationService]
})
export class OperationModule { }