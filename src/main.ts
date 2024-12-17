import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app/app.module';
import * as dotenv from 'dotenv'

dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST , DELETE, PATCH',
    credentials: true
  });
  await app.listen(3000);
}
bootstrap();
