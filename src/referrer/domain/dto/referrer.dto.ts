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

export type ApiResponse<T> = {
  origin?: string;
  status?: boolean;
  data: T;
};

export interface ApiPaginatedResponse<T> extends ApiResponse<T> {
  total: number;
  page?: number;
  last_page?: number;
}
