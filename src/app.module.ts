import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig } from './config/app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationModule } from './operation/operation.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';


@Module({
  imports: [
    PrometheusModule.register(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [AppConfig],
      ...(process.env.ENV_FILE && { envFilePath: process.env.ENV_FILE }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),
    OperationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
