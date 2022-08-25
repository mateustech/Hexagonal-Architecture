import { IsEmail, IsString } from 'class-validator';

export class ReferrerDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  birthday: string;

  @IsString()
  crm: string;
}
