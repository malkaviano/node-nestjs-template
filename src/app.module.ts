import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from '@root/app.controller';
import { AppService } from '@root/app.service';
import { LoggingMiddleware } from '@root/middlewares/logging.middleware';
import { HelpersModule } from '@root/helpers/helpers.module';

@Module({
  imports: [ConfigModule.forRoot(), HelpersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
