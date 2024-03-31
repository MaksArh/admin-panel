import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const CORS_OPTIONS = {
  origin: ['https://localhost'], // TODO: настроить ориджин на прод
  allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Origin',
    'X-Requested-With',
    'Accept',
    'Content-Type',
    'Authorization',
    'Access-Control-Allow-Headers' // Добавлен Access-Control-Allow-Headers
  ],
  exposedHeaders: ['Authorization', 'Access-Control-Allow-Headers'], // Добавлен Access-Control-Allow-Headers
  credentials: true,
  methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE']
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT ?? 5001;

  const config = new DocumentBuilder()
    .setTitle('MWS admin documentation')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('capybaraDev')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  app.enableCors();
  app.setGlobalPrefix('api')
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, '0.0.0.0', () => { console.log(`ALIVE port=${PORT}`); });
}
bootstrap();
