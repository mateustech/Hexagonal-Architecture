// Entidade da ORM
export default class ReferrerModel {
  private id: string;
  constructor(
    readonly name: string,
    readonly email: string,
    readonly birthday: Date,
    readonly crm: string,
    id?: string,
  ) {}
}
