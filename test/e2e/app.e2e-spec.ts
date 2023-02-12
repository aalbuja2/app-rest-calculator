import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    jest.setSystemTime(new Date(2020, 3, 1));
  });

  it('/ (PUT) Addition', () => {
    return request(app.getHttpServer())
      .put('/operation/addition')
      .send({
        number1: 1,
        number2: 2,
      })
      .expect({
        number1: 1,
        number2: 2,
        result: 3,
        operation: 'addition',
        createdAt: new Date(),
        id: 3
      });
  })
  it('/ (PUT) Substraction', () => {
    return request(app.getHttpServer())
      .put('/operation/substraction')
      .send({
        number1: 1,
        number2: 2,
      })
      .expect({
        number1: 1,
        number2: 2,
        result: -1,
        operation: 'substraction',
        createdAt: new Date(),
        id: 5
      });
  })
  it('/ (PUT) Multiplication', () => {
    return request(app.getHttpServer())
      .put('/operation/multiplication')
      .send({
        number1: 1,
        number2: 2,
      })
      .expect({
        number1: 1,
        number2: 2,
        result: 2,
        operation: 'multiplication',
        createdAt: new Date(),
        id: 3
      });
  })
  it('/ (PUT) Division', () => {
    return request(app.getHttpServer())
      .put('/operation/division')
      .send({
        number1: 1,
        number2: 2,
      })
      .expect({
        number1: 1,
        number2: 2,
        result: 0.5,
        operation: 'division',
        createdAt: new Date(),
        id: 3
      });
  })
});
