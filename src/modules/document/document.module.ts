import { Module } from '@nestjs/common';
import { DocumentController } from './controllers/document.controller';
import { DocumentService } from './services/document.service';
import { ConfigHttp } from '@/config/config.http';

@Module({
    imports: [ConfigHttp],
    controllers: [DocumentController],
    providers: [DocumentService],
})
export class DocumentModule {}
