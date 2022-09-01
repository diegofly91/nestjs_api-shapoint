import { Controller, Get } from '@nestjs/common';
import { DocumentService } from '../services/document.service';

@Controller()
export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}
    @Get('/')
    getHello(): string {
        return this.documentService.getHello();
    }

    @Get('/documents')
    async getDocumentsAll(): Promise<any> {
        return await this.documentService.getDocumentsAll();
    }
}
