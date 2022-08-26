import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from '@root/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Habitus')
    .setDescription('The Habitus API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  const port = process.env.SERVER_PORT ?? 3000;

  await app.listen(port);

  const logger = new Logger();

  logger.log(`Server started on port ${port}`, 'SERVER');
}

bootstrap();
