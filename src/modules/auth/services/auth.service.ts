import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ISite, ISitePayload } from '../interfaces';
import { LoginSiteDto, Token } from '../dtos';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly authRepository: AuthRepository) {}

    async validateUser({ site, clientId }: LoginSiteDto): Promise<Token> {
        const azu_token = await this.authRepository.loginMsGraph(clientId);
        const dataSite = await this.authRepository.getSiteData(azu_token, site);
        return await this.payloadData(azu_token, dataSite, clientId);
    }

    async refreshToken({ clientId, id, name, webUrl, displayName }: ISitePayload): Promise<Token> {
        const azu_token = await this.authRepository.loginMsGraph(clientId);
        return await this.payloadData(azu_token, { id, name, webUrl, displayName }, clientId);
    }

    async payloadData(token: string, { id, name, webUrl, displayName }: ISite, clientId: string) {
        const date = new Date();
        const payload: ISitePayload = {
            id,
            name,
            token,
            webUrl,
            displayName,
            clientId,
        };

        return {
            access_token: this.jwtService.sign(payload),
            expiration: Math.floor(date.getTime()) + 3520000,
        };
    }

    async validateToken(auth: string): Promise<ISitePayload> {
        const token = auth;
        try {
            const decoded = this.jwtService.verify(token);
            return decoded;
        } catch (err) {
            const message = 'Token error: ' + (err.message || err.name);
            throw new HttpException(message, HttpStatus.UNAUTHORIZED);
        }
    }
}
