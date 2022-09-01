import { HttpModule } from '@nestjs/axios';
import { ConfigService, ConfigModule } from '@nestjs/config';

export const ConfigHttp = HttpModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
        timeout: 5000,
        maxRedirects: 5,
        headers: {
            'Content-Type': 'application/json;odata=verbose',
            Accept: 'application/json;odata=verbose',
            Authorization: 'Bearer ' + configService.get('AUTHORIZATION'),
        },
    }),
    inject: [ConfigService],
});
