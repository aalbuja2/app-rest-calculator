import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  console.log(process.env.TYPEORM_HOST);
  console.log(process.env.TYPEORM_DATABASE);
  console.log(process.env.TYPEORM_USERNAME);
  console.log(process.env.TYPEORM_PASSWORD);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
