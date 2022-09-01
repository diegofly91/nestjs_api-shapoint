import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
//import { ConfigHttp } from './config/config.http';
import { DocumentModule } from '@/modules/document/document.module';
@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), DocumentModule],
})
export class AppModule {
    static host: string;
    static port: number;

    constructor(private readonly configService: ConfigService) {
        AppModule.host = this.configService.get('HOST');
        AppModule.port = +this.configService.get('PORT');
    }
}
