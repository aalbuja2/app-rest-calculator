import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('operation_log')
export class OperationLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number1: number;

  @Column()
  number2: number;

  @Column()
  result: number;

  @Column()
  operation: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
