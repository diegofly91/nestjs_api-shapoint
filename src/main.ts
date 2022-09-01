import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = new Logger('Bootstrap');
    const host = AppModule.host || '127.0.0.1';
    const port = AppModule.port || 3000;

    await app.listen(port, host);
    logger.log(`Server is running in ${await app.getUrl()}`);
}
bootstrap();
