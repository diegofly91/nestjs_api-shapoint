import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class DocumentService {
    constructor(private readonly httpService: HttpService) {}

    getHello(): string {
        return 'Hello World!!';
    }

    async getDocumentsAll(): Promise<AxiosResponse<any>> {
        const { data } = await this.httpService.axiosRef.get(`
            https://pruebas846.sharepoint.com/sites/prueba/_api/web/lists/getbytitle('documents')/Items
        `);

        console.log(data?.d);
        return data?.d.results;
    }
}
