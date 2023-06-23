import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    { 
      origin: ['http://localhost:3000', 'https://parking-management-nv.vercel.app'],
    }
  );
  await app.listen(port, "0.0.0.0");
}
bootstrap();
