import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginSiteDto {
    @MinLength(5, { message: 'el client_id es muy corto' })
    @MaxLength(60, { message: 'el client_id es muy largo' })
    @IsNotEmpty()
    clientId: string;

    @MinLength(2, { message: 'the name the site small' })
    @MaxLength(120, { message: 'the name site is long caracteres' })
    @IsString()
    @IsNotEmpty()
    site: string;
}
