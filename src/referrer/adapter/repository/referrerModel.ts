// Entidade da ORM
export default class ReferrerModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly birthday: Date,
    readonly crm: string,
  ) {}
}
