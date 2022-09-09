import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginSiteDto {
    @MinLength(5, { message: 'el client_id es muy corto' })
    @MaxLength(60, { message: 'el client_id es muy largo' })
    @IsNotEmpty()
    clientId: string;

    @MaxLength(120, { message: 'the name site is long caracteres' })
    @IsString()
    @IsOptional()
    site: string;
}
