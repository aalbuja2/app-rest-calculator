

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOerationLogTable1676038277282 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'operation_log',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'number1',
                        type: 'int',
                    },
                    {
                        name: 'number2',
                        type: 'int',
                    },
                    {
                        name: 'result',
                        type: 'int',
                    },
                    {
                        name: 'operation',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',

                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('operation_log');
    }
}