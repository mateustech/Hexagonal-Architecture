import { IsDate, IsEmail, IsString } from 'class-validator';

export class ReferrerDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDate()
  birthday: Date;

  @IsString()
  crm: string;
}
