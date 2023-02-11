import { OperationLog } from "src/entities/operation_log.entity";

export const AppConfig = () => ({
  server: {
    port: parseInt(process.env.SERVER_PORT),
  },
  database: {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [OperationLog],
    migrations: [__dirname + '/../**/*.migrations.{js,ts}'],
    cli: {
      entitiesDir: __dirname + '/../entities',
      migrationsDir: __dirname + '/../migrations',
    },
    migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
    migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN,
    synchronize: process.env.TYPEORM_SYNCHRONIZE,
  },
});
