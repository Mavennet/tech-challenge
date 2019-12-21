import { NestFactory } from '@nestjs/core';
import { AppModule } from './features/app/app.module';
import passport = require('passport');
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(passport.initialize());
  app.use(passport.session());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(3000);
}
bootstrap();
