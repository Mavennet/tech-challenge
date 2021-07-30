import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from '../src/users/users.module';
import { users } from '../src/common/DB/usersDB';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(users);
  });

  users.forEach(user => {
    it(`/users/${user.id} (GET)`, () => {
        return request(app.getHttpServer())
          .get(`/users/${user.id}`)
          .expect(200)
          .expect(user);
      });
  });

});
