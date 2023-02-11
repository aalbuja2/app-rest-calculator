
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { CreateOerationLogTable1676038277282 } from './migrations/1676038277282-CreateOerationLogTable';


config();

export default new DataSource({
  type: 'postgres',
  name: 'operation',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  ssl: process.env.POSTGRES_SSL === 'true',
  entities: [__dirname + '/src/entities/*.entity{.ts,.js}'],
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  dropSchema: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: false,
  migrations: [CreateOerationLogTable1676038277282],
});